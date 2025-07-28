import { skills } from "../data/skills";
import { useLanguage } from "../context/LanguageContext"; // Usamos el contexto para obtener las traducciones
import "./skills.css";

const Skills = () => {
    const { translate } = useLanguage(); // Obtenemos la función de traducción

    return (
        <section className="skills-section">
            <h2 className="skills-title">{translate('skillsTitle')}</h2> {/* Traducir */}

            <div className="skills-container">
                {/* Back-End */}
                <div className="skills-category">
                    <h3 className="category-title">{translate('backEnd')}</h3> 
                    <div className="skills-list">
                        {skills.backend.map((skill, index) => (
                            <div key={index} className="skill-card">
                                <img className="icon" src={skill.icon} alt={skill.name} />
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Front-End */}
                <div className="skills-category">
                    <h3 className="category-title">{translate('frontEnd')}</h3> 
                    <div className="skills-list">
                        {skills.frontend.map((skill, index) => (
                            <div key={index} className="skill-card">
                                <img className="icon" src={skill.icon} alt={skill.name} />
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Herramientas */}
                <div className="skills-category">
                    <h3 className="category-title">{translate('tools')}</h3> 
                    <div className="skills-list">
                        {skills.herramientas.map((skill, index) => (
                            <div key={index} className="skill-card">
                                <img className="icon" src={skill.icon} alt={skill.name} />
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
