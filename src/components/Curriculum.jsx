import React from 'react';
import './curriculum.css';

const Curriculum = () => {
  return (
    <>

      <div className="curriculum">
        <div className="header-cv">
          <h1>Luciano Oroquieta Merlino</h1>
          <h2>Técnico Universitario en Desarrollo de Aplicaciones Informáticas</h2>
          <div className="contact-info">
            <p>📍 Tandil, Argentina</p>
            <p>📞 +54 2281 534974</p>
            <p>📧 oroquietaluciano@gmail.com</p>
            <p>
              <a href="https://linkedin.com/in/luciano-oroquieta" target="_blank" rel="noopener noreferrer">🔗LinkedIn</a> |
              <a href="https://github.com/LucianoOroquietam" target="_blank" rel="noopener noreferrer">💻GitHub</a>
            </p>
          </div>
        </div>

        <section className="section">
          <h3>Experiencia Profesional</h3>
          <div className="content-exp">
            <h4>Ayudante de Cátedra - Universidad Nacional del Centro de la Provincia de Buenos Aires (UNICEN)</h4>
            <p className="date">Agosto 2023 - Actualidad | Tandil, Argentina</p>
            <ul>
              <li>Facilito clases sobre desarrollo web, utilizando tecnologías como PHP y MySQL.</li>
              <li>Implemento y enseño el uso del patrón de diseño MVC para el desarrollo de aplicaciones orientadas al backend.</li>
              <li>Guío a los estudiantes en la creación de APIs RESTful y la integración con Postman para realizar pruebas de endpoints.</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h3>Educación</h3>
          <div className="content-edu">
            <h4>Universidad Nacional del Centro de la Provincia de Buenos Aires (UNICEN)</h4>
            <p className="date">Marzo 2022 - Actualidad | Tandil, Argentina</p>
            <p>Técnico Universitario en Desarrollo de Aplicaciones Informáticas (TUDAI)</p>
          </div>
        </section>

        <section className="section">
          <h3>Formación Complementaria</h3>
          <ul>
            <li>Introducción a Angular - UNICEN</li>
            <li>Google Analytics 4: La Nueva Generación de Analytics - UNICEN</li>
            <li>Introducción a las Bases de Datos NoSQL - UNICEN</li>
          </ul>
        </section>

        <section className="section">
          <h3>Skills</h3>
          <ul>
            <li><strong>Desarrollo Frontend:</strong> HTML, CSS, Figma, React, Angular, Tailwind</li>
            <li><strong>Desarrollo Backend:</strong> Java (Spring Boot), PHP(Laravel) y APIs RESTful</li>
            <li><strong>Bases de Datos:</strong> MySQL, PostgreSQL y MongoDB</li>
            <li><strong>Herramientas:</strong> Docker, Git, JUnit, TestNG, Swagger, Postman</li>
            <li><strong>Habilidades Blandas:</strong> Comunicación efectiva, trabajo en equipo, proactividad</li>
          </ul>
        </section>

      </div>

      <div className="download-cv-container">
        <div className="download-cv">
          <a href="/CV_Luciano_Oroquieta.pdf" download="CV_Luciano_Oroquieta.pdf">
            <button className="download-btn">Descargar CV (Español)</button>
          </a>
        </div>

        <div className="download-cv">
          <a href="/CV_Luciano_Oroquieta_ingles.pdf" download="CV_Luciano_Oroquieta_ingles.pdf">
            <button className="download-btn">Download CV (English)</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Curriculum;
