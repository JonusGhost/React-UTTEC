import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, Table, Button } from 'react-bootstrap';

function Home() {

  const [especialidades, setEspecialidades] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const fetchEspecialidades = async() => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/especialidades');
      setEspecialidades(response.data);
    }catch (error) {
      console.error('Error en el fetch de especialidades: ',error);
    }
  };

  useEffect (()  => {
    fetchEspecialidades();
  },[]);

  const deleteEsp = async (id) => {
    try{
        const response = await axios.post('http://127.0.0.1:8000/api/especialidad/borrar',{
            id: id
        })

        console.log(response.data)

        if(response.data === 'Ok, Eliminada'){
            fetchEspecialidades()
        }else{
            setError(response.data.error)
        }
      }
      catch (error) {
          setError ('Ocurrio un error en el servidor')
          console.error('Ocurrio un error: ',error)
      }
  }

  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Johan</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/cita_list">Citas</Nav.Link>
        <Nav.Link href="#features">Gonzalez</Nav.Link>
        <Nav.Link href="#pricing">2522160180</Nav.Link>
      </Nav>
    </Container>
  </Navbar>

  <Container className="mt-3">
    <td>
    <h1>Especialidades</h1>{' '}
    <Button variant='outline-dark' onClick={() => {navigate('/especialidad')}}>Nuevo registro</Button>
    </td>
  </Container>
  <Container className="mt-3">
  <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Especialidad</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {especialidades.map((item) => (
          <tr key = {item.id}>
            <td>{item.id}</td>
            <td>{item.nombre}</td>
            <td>
              <Button variant='primary' onClick={() => navigate('/especialidad/' + item.id)}>Editar</Button>{' '}
              <Button variant='danger' onClick={() => deleteEsp(item.id)}>Eliminar</Button>
            </td>
        </tr>
        ))}
      </tbody>
    </Table>
    </Container>
  </>
  )
}

export default Home