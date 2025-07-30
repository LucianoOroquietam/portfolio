import './curriculum.css';

const Curriculum = () => {
  return (
    <>
      <div className="curriculum">
        {/* HEADER CV */}
        <div className="header-cv">
          <h1>Luciano Oroquieta Merlino</h1>
          <h2>Técnico Universitario en Desarrollo de Aplicaciones Informáticas (TUDAI)</h2>
          <p className="summary">
            Soy Ayudante de Cátedra en UNICEN y desarrollador Fullstack con experiencia en proyectos
            académicos y freelance. Me especializo en arquitecturas MVC, APIs RESTful y microservicios,
            creando soluciones eficientes y escalables.
          </p>
          <div className="contact-info">
            <p>📍 Tandil, Argentina</p>
            <p>📞 +54 2281 534974</p>
            <p>📧 <a href="mailto:oroquietaluciano@gmail.com">oroquietaluciano@gmail.com</a></p>
            <p>
              <a href="https://linkedin.com/in/luciano-oroquieta" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a> |
              <a href="https://github.com/LucianoOroquietam" target="_blank" rel="noopener noreferrer"> 💻 GitHub</a> |
              <a href="https://www.luciano-oroquieta.me/home" target="_blank" rel="noopener noreferrer"> 🌐 Portfolio</a>
            </p>
          </div>
        </div>

        {/* EXPERIENCIA PROFESIONAL */}
        <section className="section">
          <h3>Experiencia Profesional</h3>

          <div className="content-exp">
            <h4>Ayudante de Cátedra - UNICEN</h4>
            <p className="date">Agosto 2023 – Actualidad | Tandil, Argentina</p>
            <ul>
              <li>Facilito clases de desarrollo web con PHP y MySQL.</li>
              <li>Enseño el patrón MVC para aplicaciones backend en entorno académico.</li>
              <li>Guío a estudiantes en la creación de APIs RESTful y pruebas con Postman.</li>
            </ul>
          </div>

          <div className="content-exp">
            <h4>Desarrollador Web Freelance</h4>
            <p className="date">Enero 2024 – Actualidad</p>
            <ul>
              <li>Diseño de páginas web para agencia de viajes utilizando Figma.</li>
              <li>Desarrollo de consultora IT con React.</li>
              <li>Implementación de Tailwind CSS para interfaces responsivas y accesibles.</li>
            </ul>
          </div>
        </section>

        {/* FORMACIÓN ACADÉMICA */}
        <section className="section">
          <h3>Formación Académica</h3>
          <div className="content-edu">
            <h4>Universidad Nacional del Centro de la Provincia de Buenos Aires (UNICEN)</h4>
            <p className="date">Marzo 2022 – Actualidad | Tandil, Argentina</p>
            <p>Técnico Universitario en Desarrollo de Aplicaciones Informáticas (TUDAI)</p>
          </div>
        </section>

        {/* PROYECTOS DESTACADOS */}
        <section className="section">
          <h3>Proyectos Destacados</h3>

          <div className="content-exp">
            <h4>Proyecto FullStack - Academia ForIT</h4>
            <p className="date">2025</p>
            <ul>
              <li>CRUD de tareas con persistencia en SQLite.</li>
              <li>Interfaz responsive y accesible con React y Tailwind.</li>
              <li>Integración de ESLint y Prettier para calidad de código.</li>
            </ul>
          </div>

          <div className="content-exp">
            <h4>Microservicios con Java & Spring Boot</h4>
            <p className="date">2024</p>
            <ul>
              <li>Arquitectura distribuida con Eureka y contenedores Docker.</li>
              <li>Microservicios independientes con base de datos MySQL.</li>
              <li>Autenticación con JWT y pruebas unitarias en JUnit.</li>
            </ul>
          </div>

        
        </section>

        {/* FORMACIÓN COMPLEMENTARIA */}
        <section className="section">
          <h3>Formación Complementaria</h3>
          <ul>
            <li>Introducción a Angular - UNICEN</li>
            <li>Bases de Datos NoSQL - UNICEN</li>
            <li>Google Analytics 4 - UNICEN</li>
            <li>Master en React (Hooks, MERN, NodeJS, JWT) - Udemy</li>
          </ul>
        </section>

        {/* SKILLS */}
        <section className="section">
          <h3>Skills</h3>
          <ul>
            <li><strong>Frontend:</strong> HTML, CSS, Figma, React, Angular, Tailwind</li>
            <li><strong>Backend:</strong> Java (Spring Boot), PHP (Laravel), Node.js (Express)</li>
            <li><strong>Bases de Datos:</strong> MySQL, PostgreSQL, MongoDB, SQLite</li>
            <li><strong>Herramientas:</strong> Docker, Git, Swagger, Postman, ESLint, Prettier</li>
            <li><strong>Otros:</strong> Electron, MVC, APIs RESTful, microservicios</li>
            <li><strong>Blandas:</strong> Comunicación efectiva, trabajo en equipo, proactividad</li>
          </ul>
        </section>
      </div>

      {/* DESCARGA CV */}
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
