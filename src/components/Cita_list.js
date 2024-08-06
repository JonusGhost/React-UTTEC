import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const Styles = styled.div`
    body {
        font-family: 'Poppins', sans-serif;
        background: linear-gradient(135deg, #c3cfe2, #c3cfe2);
        color: #333;
        margin: 0;
        padding: 0;
    }

    .navbar {
        background-color: #0044cc;
    }

    .navbar-brand {
        font-weight: bold;
    }

    .welcome-section {
        background-color: #f8f9fa;
        padding: 2rem;
        border-radius: 0.5rem;
        margin-bottom: 2rem;
    }

    .footer {
        background-color: #0044cc;
        color: #fff;
        text-align: center;
        padding: 1rem;
        margin-top: 2rem;
    }

    h1, h2 {
        color: #0044cc;
    }

    .table {
        margin-top: 1rem;
    }
`;

function Cita_list() {
    const [especialidades, setEspecialidades] = useState([]);
    const [citas, setCita] = useState([]);
    const [pacientes, setPaciente] = useState([]);
    const navigate = useNavigate();

    const fetchCitas = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/citas');
            setCita(response.data);
        } catch (error) {
            console.error('Error en el fetch de especialidades: ', error);
        }
    };

    const fetchEspecialidad = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/especialidades');
            setEspecialidades(response.data);
        } catch (error) {
            console.error('Error en el fetch de especialidades: ', error);
        }
    };

    const fetchPacientes = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/pacientes');
            setPaciente(response.data);
        } catch (error) {
            console.error('Error en el fetch de especialidades: ', error);
        }
    };

    useEffect(() => {
        fetchCitas();
        fetchEspecialidad();
        fetchPacientes();
    }, []);

    const getEspecialidadNombre = (id) => {
        const especialidad = especialidades.find(espec => espec.id === id);
        return especialidad ? especialidad.nombre : '';
    };

    const getPacienteNombre = (id) => {
        const paciente = pacientes.find(pacie => pacie.id === id);
        return paciente ? paciente.nombre : '';
    };

    return (
        <Styles>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Hospital Lindas Sonrisas</Navbar.Brand>
                    <Nav className="me-auto">

                        <Nav.Link href="/cita">Nueva Cita</Nav.Link>
                        
                    </Nav>
                </Container>
            </Navbar>

            <Container className="mt-5">
                <div className="welcome-section">
                    <h1>Bienvenido a Hospital Lindas Sonrisas</h1>
                    <p>
                        Aquí puedes ver y gestionar tus citas. Si necesitas agendar una nueva cita, usa el botón a continuación.
                    </p>
                    <Button variant="primary" onClick={() => { navigate('/cita') }}>Nueva Cita</Button>
                </div>

                <h2>Listado de Citas</h2>
                <Table striped bordered hover className="mt-3">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Fecha</th>
                            <th>Paciente</th>
                            <th>Especialidad</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {citas.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.fecha}</td>
                                <td>{getPacienteNombre(item.id_paciente)}</td>
                                <td>{getEspecialidadNombre(item.id_especialidad)}</td>
                                <td>{item.estado}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>

            <footer className="footer mt-auto py-3">
                <Container>
                    <span className="text-muted">&copy; 2024 Hospital Lindas Sonrisas. Todos los derechos reservados.</span>
                </Container>
            </footer>
        </Styles>
    )
}

export default Cita_list;
