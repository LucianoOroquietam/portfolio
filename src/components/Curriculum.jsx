import "./curriculum.css";

const Curriculum = () => {
  return (
    <>
      <div className="curriculum">
        {/* <div className="header-cv">
          <h1>Luciano Oroquieta Merlino</h1>
          <h2>Técnico Universitario en Desarrollo de Aplicaciones Informáticas (TUDAI)</h2>
          <p className="summary">
            Soy un Ingeniero de Automatizaciones y desarrollador Full Stack con experiencia construyendo productos digitales y flujos de automatización desde cero. Me especializo en integrar IA, crear interfaces modernas y backends escalables, creando soluciones eficientes para optimizar procesos de negocio.
          </p>
          <div className="contact-info">
            <p>📍 Tandil, Argentina</p>
            <p>📞 +54 2281 534974</p>
            <p>
              📧 <a href="mailto:oroquietaluciano@gmail.com">oroquietaluciano@gmail.com</a>
            </p>
            <p className="links-row">
              <a href="https://linkedin.com/in/luciano-oroquieta" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
              <span className="dot-sep" />
              <a href="https://github.com/LucianoOroquietam" target="_blank" rel="noopener noreferrer">💻 GitHub</a>
              <span className="dot-sep" />
              <a href="https://www.luciano-oroquieta.me/home" target="_blank" rel="noopener noreferrer">🌐 Portfolio</a>
            </p>
          </div>
        </div> */}

        {/* EXPERIENCIA PROFESIONAL */}
        <section className="section">
          <h3>Experiencia Profesional</h3>

          <div className="content-exp">
            <h4>Ingeniero de Automatización e IA - Thanos Corp</h4>
            <p className="date">Marzo 2026 – Actualidad | Remoto</p>
            <ul>
              <li>Infraestructura y despliegue: Entornos con Dokploy, orquestadores, Plane, MySQL.</li>
              <li>Desarrollo de IA: Creación y orquestación de agentes locales con Claude Code y Ollama.</li>
              <li>Productos internos: Agencia automatizada y agentes especializados.</li>
            </ul>
          </div>

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

          <div className="content-exp">
            <h4>RoverSec — Proyecto independiente de divulgación</h4>
            <p className="date">2025</p>
            <ul>
              <li>Desarrollo fullstack con Next.js y TailwindCSS (mobile-first).</li>
              <li>Diseño responsivo y performance orientada a contenido técnico.</li>
              <li>Rol: programador principal y mantenimiento continuo.</li>
            </ul>
          </div>

          <div className="content-exp">
            <h4>Flowik – Panel de Gestión para PYMES</h4>
            <p className="date">2025</p>
            <ul>
              <li>Rol : Lider tecnico de frontend y programador full stack.</li>
              <li>Gestion de tareas y organizacion del equipo.</li>
              <li>Tecnologias: React , Spring Boot, GitFlow , Jira, Mysql.</li>
              <li>Importacion y exportacion de productos (Uso de IA).</li>
            </ul>
          </div>
        </section>

        {/* FORMACIÓN COMPLEMENTARIA */}
        <section className="section">
          <h3>Formación Complementaria</h3>
          <ul className="timeline">
            <li><span className="dot"></span> Devops Advanced Professional Certification - CertiProf</li>
            <li><span className="dot"></span> Master en React: ReactJS, Hooks, MERN, NodeJS, JWT - Udemy</li>
            <li><span className="dot"></span> NextJs: Framework de react para produccion - Udemy (En curso)</li>
            <li><span className="dot"></span> Curso n8n - Automatización de Flujos - Udemy</li>
            <li><span className="dot"></span> Seminario Desarrollo de Plataformas - UNICEN</li>
            <li><span className="dot"></span> Seminario en Angular - UNICEN</li>
            <li><span className="dot"></span> Seminario Bases de Datos NoSQL - UNICEN</li>
            <li><span className="dot"></span> Seminario Google Analytics 4</li>
          </ul>
        </section>

        {/* SKILLS */}
        <section className="section">
          <h3>Skills</h3>
          <div className="skills-block">
            <h4>Frontend</h4>
            <ul className="tag-list">
              <li>HTML</li><li>CSS</li><li>Figma</li><li>React</li><li>Angular</li><li>Tailwind</li><li>Next</li>
            </ul>
            <h4>Backend</h4>
            <ul className="tag-list">
              <li>Java (Spring Boot)</li><li>PHP (Laravel)</li><li>Node.js (Express)</li>
            </ul>
            <h4>Bases de Datos</h4>
            <ul className="tag-list">
              <li>MySQL</li><li>PostgreSQL</li><li>MongoDB</li><li>SQLite</li>
            </ul>
            <h4>Herramientas</h4>
            <ul className="tag-list">
              <li>Docker</li><li>Git</li><li>Swagger</li><li>Postman</li><li>ESLint</li><li>Prettier</li>Slack<li>Jira</li><li>Trello</li>GitFlow<li>Figma</li>
            </ul>

          </div>
        </section>


        {/* RECOMENDACIONES (nuevo) */}
        <section className="section recommendations">
          <h3>Recomendaciones</h3>

          <div className="recommendation">
            <blockquote className="quote">
              “Luciano fue no solo un referente técnico, sino también un conector entre equipos.
              Su compromiso y liderazgo marcaron un diferencial claro en la dinámica y la calidad del proyecto.”
            </blockquote>
            <p className="quote-author">— Lorena Sartori (PM) · Feedback Flowik</p>

            <ul className="bullets-inline">
              <li>Liderazgo</li>
              <li>Comunicación efectiva</li>
              <li>Aporte full-stack (deploy, DER)</li>
            </ul>
          </div>
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
