import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, Table, Button } from 'react-bootstrap';

function Cita_list() {
    const [especialidades, setEspecialidades] = useState([]);
    const [citas, setCita] = useState([]);
    const [pacientes, setPaciente] = useState([]);
    const navigate = useNavigate();
    
    const fetchCitas = async() => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/citas');
        setCita(response.data);
      }catch (error) {
        console.error('Error en el fetch de especialidades: ',error);
      }
    };

    const fetchEspecialidad = async() => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/especialidades');
        setEspecialidades(response.data);
      }catch (error) {
        console.error('Error en el fetch de especialidades: ',error);
      }
    };

    const fetchPacientes = async() => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/pacientes');
        setPaciente(response.data);
      }catch (error) {
        console.error('Error en el fetch de especialidades: ',error);
      }
    };

    useEffect (()  => {
      fetchCitas();
      fetchEspecialidad();
      fetchPacientes();
    },[]);
    
    const getEspecialidadNombre = (id) => {
      const especialidad = especialidades.find(espec => espec.id === id);
      return especialidad ? especialidad.nombre : '';
    };

    const getPacienteNombre = (id) => {
      const paciente = pacientes.find(pacie => pacie.id === id);
      return paciente ? paciente.nombre : '';
    };

    return (
      <>
      <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Johan</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">Especialidad</Nav.Link>
          <Nav.Link href="#features">Gonzalez</Nav.Link>
          <Nav.Link href="#pricing">2522160180</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

    <Container className="mt-3">
      <td>
      <h1>Citas</h1>{' '}
      <Button variant='outline-dark' onClick={() => {navigate('/cita')}}>Nueva cita</Button>
      </td>
    </Container>
    <Container className="mt-3">
    <Table striped bordered hover>
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
            <tr key = {item.id}>
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
    </>
    )
}

export default Cita_list