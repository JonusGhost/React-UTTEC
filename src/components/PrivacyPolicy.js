import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <header className="header">
        <Container>
          <h1>Políticas de Privacidad</h1>
        </Container>
      </header>

      <main className="container">
        <section>
          <h2>Introducción</h2>
          <p>En Hospital Lindas Sonrisas, nos tomamos muy en serio su privacidad y estamos comprometidos a proteger sus datos personales. Esta política de privacidad describe cómo recopilamos, usamos y protegemos su información.</p>
        </section>

        <section>
          <h2>Información que Recopilamos</h2>
          <p>Podemos recopilar y procesar los siguientes datos sobre usted:</p>
          <ul>
            <li>Información que usted nos proporciona al registrarse.</li>
            <li>Detalles de sus visitas a nuestro sitio, incluidos datos de tráfico, datos de ubicación, weblogs y otros datos de comunicación.</li>
            <li>Información proporcionada a través de formularios de contacto o encuestas.</li>
          </ul>
        </section>

        <section>
          <h2>Uso de su Información</h2>
          <p>Utilizamos la información que tenemos sobre usted de las siguientes maneras:</p>
          <ul>
            <li>Para proporcionarle la información y servicios que nos solicite.</li>
            <li>Para asegurar que el contenido de nuestro sitio se presenta de la manera más efectiva para usted y para su computadora.</li>
            <li>Para cumplir con nuestras obligaciones derivadas de cualquier contrato celebrado entre usted y nosotros.</li>
          </ul>
        </section>

        <section>
          <h2>Divulgación de su Información</h2>
          <p>No compartimos su información personal con terceros, excepto en las siguientes circunstancias:</p>
          <ul>
            <li>Si estamos obligados a divulgar o compartir sus datos personales para cumplir con alguna obligación legal.</li>
            <li>Para proteger los derechos, propiedad o seguridad de Hospital Lindas Sonrisas, nuestros clientes u otros.</li>
          </ul>
        </section>

        <section>
          <h2>Seguridad</h2>
          <p>Implementamos medidas de seguridad adecuadas para proteger sus datos personales contra el acceso no autorizado, la alteración, la divulgación o la destrucción. Sin embargo, la transmisión de información a través de Internet no es completamente segura y no podemos garantizar la seguridad de sus datos transmitidos a nuestro sitio; cualquier transmisión es bajo su propio riesgo.</p>
        </section>

        <section>
          <h2>Sus Derechos</h2>
          <p>Usted tiene derecho a acceder a la información que tenemos sobre usted y a solicitar la corrección de cualquier información incorrecta. También puede solicitar la eliminación de su información personal, sujeto a ciertas excepciones legales.</p>
        </section>

        <section>
          <h2>Cambios a Nuestra Política de Privacidad</h2>
          <p>Podemos actualizar esta política de privacidad de vez en cuando, y cualquier cambio se publicará en esta página. Le recomendamos que revise periódicamente esta página para estar al tanto de cualquier cambio.</p>
        </section>

        <section>
          <h2>Contacto</h2>
          <p>Si tiene alguna pregunta sobre esta política de privacidad o sobre el tratamiento de sus datos personales, por favor póngase en contacto con nosotros a través de nuestro <a href="#">formulario de contacto</a>.</p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Hospital Lindas Sonrisas. Todos los derechos reservados.</p>
      </footer>

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
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 50px 20px;
          text-align: center;
        }
        .footer {
          background-color: #0044cc;
          color: #fff;
          padding: 20px;
          text-align: center;
          text-shadow: 0 0 10px #00f, 0 0 20px #00f, 0 0 30px #00f;
        }
        h2 {
          color: #0044cc;
          margin-top: 30px;
        }
        ul {
          list-style-type: disc;
          padding-left: 20px;
          text-align: left;
        }
        a {
          color: #0044cc;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

export default PrivacyPolicy;
