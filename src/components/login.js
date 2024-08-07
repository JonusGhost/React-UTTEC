import axios from 'axios';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Form, Button, Row, Col, Modal, Navbar, Nav, Carousel } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

export const LoginButton = () => 
  {
    const { loginWithRedirect } = useAuth0();

    return <button onClick={() => loginWithRedirect()}>Login con 0Auth</button>
  }
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [registerUsername, setRegisterUsername] = useState('');
  const [email, setEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [appPat, setAppPat] = useState('');
  const [appMat, setAppMat] = useState('');
  const [telefono, setTelefono] = useState('');
  const [registerError, setRegisterError] = useState('');
  const navigate = useNavigate();

  const loginValidate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        email: username,
        password: password
      });

      console.log(response.data);

      if (response.data.acceso === 'Ok') {
        navigate('/cita_list');
      } else {
        setError(response.data.error);
      }

    } catch (error) {
      setError('Ocurrió un error con el servidor');
      console.error('Ocurrió un error: ', error);
    }
  };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleCloseRegister = () => setShowRegisterModal(false);
  const handleShowRegister = () => setShowRegisterModal(true);

  const registroValidate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/paciente/guardar', {
        username: registerUsername,
        email: email,
        password: registerPassword,
        nombre: registerUsername,
        app_pat: appPat,
        app_mat: appMat,
        telefono: telefono
      });

      console.log(response.data);

      if (response.data === 'Ok') {
        setShowRegisterModal(false);
        setShowModal(true);
      } else {
        setRegisterError(response.data.error);
      }

    } catch (error) {
      setRegisterError('Ocurrió un error con el servidor');
      console.error('Ocurrió un error: ', error);
    }
  };

  return (
    <>
      <header className="header">
        <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1>BIENVENIDO A HOSPITAL LINDAS SONRISAS</h1>
          <Navbar bg="none" expand="lg" className="nav-links" style={{ justifyContent: 'center' }}>
            <Nav>
              <Button className="btn" onClick={handleShow}>Iniciar Sesión</Button>
              <Button className="btn" onClick={handleShowRegister}>Regístrate</Button>
            </Nav>
          </Navbar>
        </Container>
      </header>

      <main className="container">
        <h2>HOSPITAL LINDAS SONRISAS</h2>
        <p>Por favor, inicie sesión o regístrese para acceder a su cuenta y utilizar nuestros servicios.</p>

        <div className="carousel-container">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={`${process.env.PUBLIC_URL}/doctor1.jpeg`}
                alt="Doctor 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={`${process.env.PUBLIC_URL}/doctor3.jpg`}
                alt="Doctor 3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={`${process.env.PUBLIC_URL}/doctor4.jpg`}
                alt="Doctor 4"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={`${process.env.PUBLIC_URL}/doctor5.jpg`}
                alt="Doctor 5"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="video-container">
          <h3>Conozca nuestras instalaciones</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/aK146sAFYgU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Hospital Lindas Sonrisas. Todos los derechos reservados.</p>
        <p><a href="#" style={{ color: 'red' }} onClick={() => navigate('/privacy')}>Políticas de Privacidad</a></p>
      </footer>

      {/* Modal de Inicio de Sesión */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                <a href="#" onClick={handleShowRegister}>Regístrate</a>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Modal de Registro */}
      <Modal show={showRegisterModal} onHide={handleCloseRegister} centered>
        <Modal.Header closeButton>
          <Modal.Title>Registro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={registroValidate}>
            <Form.Group className='mb-3' controlId='formNombre'>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                required
                type="text"
                value={registerUsername}
                onChange={(e) => setRegisterUsername(e.target.value)}
              />
            </Form.Group>

            <Row className='mb-3'>
              <Form.Group as={Col} controlId="FormAppPaterno">
                <Form.Label>Apellido paterno</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={appPat}
                  onChange={(e) => setAppPat(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="FormAppMaterno">
                <Form.Label>Apellido materno</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={appMat}
                  onChange={(e) => setAppMat(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="FromTelefono">
                <Form.Label>Teléfono</Form.Label>
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

            <Form.Group className="mb-3" controlId="registerPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                required
                type="password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
              />
              <Form.Text id="passwordHelpBlock" muted>
                Tu contraseña debe tener entre 8 y 20 caracteres, contener letras y números,
                y no debe contener espacios, caracteres especiales ni emojis.
              </Form.Text>
            </Form.Group>

            {registerError && <p className="text-danger">{registerError}</p>}

            <Row className='align-items-center'>
              <Col xs='auto'>
                <Button variant="primary" type="submit">Registrarse</Button>
              </Col>
              <Col xs='auto' className="text-center">
                <p className="text-primary mb-0 ms-2">O</p>
              </Col>
              <Col xs='auto' className="text-center">
                <p className="text-primary mb-0 ms-2">¿Ya tienes una cuenta?</p>
                <a href="#" onClick={() => { setShowRegisterModal(false); setShowModal(true); }}>Iniciar Sesión</a>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>

      <style jsx="true">{`
        body {
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #c3cfe2, #c3cfe2);
          color: #333;
          margin: 0;
          padding: 0;
        }
        .header {
          background: linear-gradient(to right, #0044cc, #00aaff);
          color: #fff;
          padding: 20px;
          width: 100%;
          text-align: center;
          text-shadow: 0 0 10px #00f, 0 0 20px #00f, 0 0 30px #00f;
        }
        .header h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 600;
        }
        .nav-links .btn {
          color: #fff;
          text-decoration: none;
          margin: 0 15px;
          padding: 10px 20px;
          border-radius: 5px;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .nav-links .btn:hover {
          background-color: #0033aa;
          color: #f5f7fa;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 50px 20px;
          text-align: center;
        }
        .btn {
          display: inline-block;
          margin: 20px;
          padding: 15px 30px;
          font-size: 1rem;
          color: #fff;
          background-color: #0044cc;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          text-decoration: none;
          box-shadow: 0 0 10px #00f, 0 0 20px #00f, 0 0 30px #00f;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }
        .btn:hover {
          background-color: #0033aa;
          box-shadow: 0 0 10px #005eff, 0 0 20px #005eff, 0 0 30px #005eff;
        }
        .carousel-container {
          position: relative;
          overflow: hidden;
          width: 100%;
          padding: 20px 0;
        }
        .carousel img {
          width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 10px;
        }
        .video-container {
          margin: 50px 0;
        }
        .video-container h3 {
          font-size: 1.5rem;
          text-shadow: 0 0 10px #00f, 0 0 20px #00f, 0 0 30px #00f;
        }
        .footer {
          background-color: #0044cc;
          color: #fff;
          padding: 20px;
          text-align: center;
          text-shadow: 0 0 10px #00f, 0 0 20px #00f, 0 0 30px #00f;
        }
      `}</style>
    </>
  );
}

export default Login;
