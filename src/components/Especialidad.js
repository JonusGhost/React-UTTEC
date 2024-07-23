import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

function Especialidad() {
    const [name_esp, setName_esp] = useState('');
    const [error, setError] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();

    const submitEsp = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/especialidad/guardar',{
                id: id,
                nombre: name_esp 
            })

            console.log(response.data)

            if(response.data === 'Ok'){
                navigate('/home')
            }else{
                setError(response.data.error)
            }
        }
        catch (error) {
            setError ('Ocurrio un error en el servidor')
            console.error('Ocurrio un error: ',error)
        }
    }

    useEffect(() => {
        if(id){
            fnEspecialidad()
        }
    });

    const fnEspecialidad = async () => {
        const response = await axios.post('http://127.0.0.1:8000/api/especialidad',{
            id: id
        })
        setName_esp(response.data.nombre)
    }

  return (
    <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Container className="mt-3">
        <h1>Especialidades</h1>
        <Form onSubmit={submitEsp}>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" value={name_esp} onChange={(e) => setName_esp(e.target.value)}/>
          </Form.Group>
          {error && <p className="text-danger">{error}</p>}
          <Button variant="primary" type="submit">Guardar</Button>
        </Form>
        </Container>
    </>
  )
}

export default Especialidad