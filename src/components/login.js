import axios from 'axios';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';

function Login() {

  const [username, setUsername] = useState('');  
  const [password, setPassword] = useState('');  
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const loginValidate = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post('http://127.0.0.1:8000/api/login',{
        email: username,
        password: password 
      })

      console.log(response.data)
      
      if(response.data.acceso === 'Ok'){
        navigate('/home')
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
              <h2 className="text-center">Logueo</h2>
              <Form onSubmit={loginValidate}>
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                {error && <p className="text-danger">{error}</p>}
                
                <Row className='align-items-center'>
                    <Col xs='auto'>
                      <Button variant="primary" type="submit">Iniciar Sesión</Button>
                    </Col>
                    <Col xs='auto' className="text-center">
                      <p className="text-primary mb-0 ms-2">O</p>
                    </Col>
                    <Col xs='auto' className="text-center">
                      <p className="text-primary mb-0 ms-2">¿No tienes una cuenta?</p>
                      <a href="#" className="" onClick={() => navigate('/registro')}>Registrate</a>
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

export default Login;