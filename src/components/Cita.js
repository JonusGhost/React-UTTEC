import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Cita() {
    const [pac_id, setPac_id] = useState('');
    const [fecha, setFecha] = useState('');
    const [esp_id, setEsp_esp] = useState('');

    const [paciente, setPaciente]           = useState([]);
    const [especialidades, setEspecialidades] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const submitCita = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/cita/guardar',{
                pac_id: pac_id,
                fecha:  fecha,
                obser:  'Sin atender',
                estad:  'Pendiente',
                esp_id: esp_id,
            })

            console.log(response.data)

            if(response.data === 'Ok'){
                navigate('/cita_list')
            }else{
                setError(response.data.error)
            }
        }
        catch (error) {
            setError ('Ocurrio un error en el servidor')
            console.error('Ocurrio un error: ',error)
        }
    }

    useEffect (()  => {
      fnPaciente();
      fnEspecialidad();
    },[]);

   
  const fnPaciente = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/pacientes');
      setPaciente(response.data);
    }catch (error) {
      console.error('Error en el fetch de pacientes: ',error);
    }
  }
  
  const fnEspecialidad = async() => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/especialidades');
      setEspecialidades(response.data);
    }catch (error) {
      console.error('Error en el fetch de especialidades: ',error);
    }
  };

  return (
    <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/cita_list">Citas</Nav.Link>
            
            </Nav>
          </Container>
        </Navbar>
        <Container className="mt-3">
        <h1>Cita</h1>
        <Form onSubmit={submitCita}>
        
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Paciente</Form.Label>
            <Form.Select aria-label="Default select example" value={pac_id} onChange={(e) => setPac_id(e.target.value)}>
            <option>Seleccione al paciente...</option>
              {paciente.map((item) => (
                <option key={item.id} value={item.id}>{item.nombre}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Fecha</Form.Label>
            <Form.Control type="date" value={fecha} onChange={(e) => setFecha(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Especialidad</Form.Label>
            <Form.Select aria-label="Default select example" value={esp_id} onChange={(e) => setEsp_esp(e.target.value)}>
            <option>Seleccione la especialidad...</option>
              {especialidades.map((item) => (
                <option key={item.id} value={item.id}>{item.nombre}</option>
              ))}
            </Form.Select>
          </Form.Group>

          {error && <p className="text-danger">{error}</p>}
          <Button variant="primary" type="submit">Guardar</Button>
        </Form>
        </Container>
    </>
  )
}

export default Cita