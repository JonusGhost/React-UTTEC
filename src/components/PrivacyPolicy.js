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
        <h2>Protección de la Información</h2>
        <p>Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra el acceso no autorizado, la alteración, la divulgación o la destrucción. Estas medidas incluyen:</p>
        <ul>
            <li>Uso de tecnología de encriptación para proteger los datos durante la transmisión.</li>
            <li>Control de acceso físico y lógico a nuestras instalaciones y sistemas.</li>
            <li>Capacitación y concientización del personal sobre la importancia de la privacidad y la seguridad de los datos.</li>
        </ul>
        </section>

        <section>
        <h2>Normas y Certificaciones ISO</h2>
        <p>En Hospital Lindas Sonrisas, nos adherimos a las siguientes normas ISO para garantizar la calidad y seguridad de nuestros servicios:</p>
        <ul>
            <li><strong>ISO 9001:</strong> Sistema de Gestión de la Calidad.</li>
            <li><strong>ISO 14001:</strong> Sistema de Gestión Ambiental.</li>
            <li><strong>ISO 27001:</strong> Sistema de Gestión de Seguridad de la Información.</li>
            <li><strong>ISO 45001:</strong> Sistema de Gestión de Salud y Seguridad en el Trabajo.</li>
            <li><strong>ISO 13485:</strong> Sistema de Gestión de la Calidad para Dispositivos Médicos.</li>
        </ul>
        </section>

        <section>
        <h2>Sus Derechos</h2>
        <p>Usted tiene ciertos derechos en relación con su información personal, incluyendo el derecho a:</p>
        <ul>
            <li>Acceder a su información personal y obtener una copia de la misma.</li>
            <li>Solicitar la corrección de cualquier información personal inexacta o incompleta.</li>
            <li>Solicitar la eliminación de su información personal en determinadas circunstancias.</li>
            <li>Oponerse al procesamiento de su información personal en determinadas circunstancias.</li>
        </ul>
        </section>
        <h2>Contacte con Nosotros</h2>
        <p>Si tiene alguna pregunta sobre nuestra política de privacidad o desea ejercer sus derechos, por favor, póngase en contacto con nosotros a través de los siguientes medios:</p>
        <p>Correo electrónico: <a href="minfohospital@indassonrisas.com.mx">infohospitall@indassonrisas.com.mx</a></p>
        <p>Teléfono: 5578082170</p>
        <p>Dirección: SaludLinda, 45, Estado de México, México</p>
        <section>

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
