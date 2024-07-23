import axios from 'axios';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Form, Button, Col, Row } from 'react-bootstrap';

function Registro() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [app_pat, setApp_pat] = useState('');
    const [app_mat, setApp_mat] = useState('');
    const [telefono, setTelefono] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const registroValidate = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/paciente/guardar',{
                username: username,
                email: email,
                password: password,
                nombre: username,
                app_pat: app_pat,
                app_mat: app_mat,
                telefono: telefono
            })

            console.log(response.data)
            
            if(response.data === 'Ok'){
              navigate('/')
            }else{
              setError(response.data.error)
            }
            
          } catch (error) {
            setError ('Ocurrio un error con el servidor')
            console.error('Ocurrio un error: ',error)
          }
        }
  
    return (
      <>
        <div className="d-flex justify-content-center align-items-center vh-100">
          <Container className="mt-3">
            <Card className="w-50 mx-auto">
              <Card.Body>
                <h1 className="text-center">Registro</h1>

                <Form onSubmit={registroValidate}>

                <Form.Group className='mb-3' controlId='formNombre'>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>

                <Row className='mb-3'>  
                 <Form.Group as={Col} controlId="FormAppPaterno">
                    <Form.Label>Apellido paterno</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      value={app_pat}
                      onChange={(e) => setApp_pat(e.target.value)}
                    />
                  </Form.Group>

                 <Form.Group as={Col} controlId="FormAppMaterno">
                    <Form.Label>Apellido materno</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      value={app_mat}
                      onChange={(e) => setApp_mat(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="FromTelefono">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                    />
                  </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      required
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                      Tu contraseña debe tener entre 8 y 20 caracteres, contener letras y números, 
                      y no debe contener espacios, caracteres especiales ni emojis.
                    </Form.Text>
                  </Form.Group>

                  {error && <p className="text-danger">{error}</p>}

                  <Row className='align-items-center'>
                    <Col xs='auto'>
                      <Button variant="primary" type="submit">Registrarse</Button>
                    </Col>
                    <Col xs='auto' className="text-center">
                      <p className="text-primary mb-0 ms-2">O</p>
                    </Col>
                    <Col xs='auto' className="text-center">
                      <p className="text-primary mb-0 ms-2">¿Ya tienes una cuenta?</p>
                      <a href="#" className="" onClick={() => navigate('/')}>Iniciar Sesión</a>
                    </Col>
                  </Row>                
                </Form>
              </Card.Body>
            </Card>
          </Container>
        </div>
      </>
  );
}

export default Registro;