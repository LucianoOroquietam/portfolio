import angularIcon from "../assets/icons/angular.svg";
import htmlIcon from "../assets/icons/html.svg";
import cssIcon from "../assets/icons/css.svg";
import reactIcon from "../assets/icons/react.svg";
import figmaIcon from "../assets/icons/figma.svg";
import phpIcon from "../assets/icons/php.svg";
import MySQLIcon from "../assets/icons/mysql.svg";
import PostgreSQLIcon from "../assets/icons/postgresql.svg";
import javaIcon from "../assets/icons/java.svg";
import jsIcon from "../assets/icons/js.svg";
import springIcon from "../assets/icons/spring.svg";
import dockerIcon from "../assets/icons/docker.svg";
import gitIcon from "../assets/icons/git.svg";
import junitIcon from "../assets/icons/junit.svg";
import SwaggerIcon from "../assets/icons/swagger.svg";
import postmanIcon from "../assets/icons/postman.svg";
import TypeScriptIcon from "../assets/icons/typescript.svg";
import MongoDbIcon from "../assets/icons/mongodb.svg";
import GitHubIcon from "../assets/icons/github.svg";
import PythonIcon from "../assets/icons/python.svg";
import TailwindIcon from "../assets/icons/tailwind.svg";
import NodeIcon from "../assets/icons/nodejs.svg";
import Next from "../assets/icons/nextjs.svg";
import n8nIcon from "../assets/icons/n8n.svg";



export const skills = {
    backend: [
        { name: "Java", icon: javaIcon },
        { name: "SpringBoot", icon: springIcon },
        { name: "PHP", icon: phpIcon },
        { name: "MySQL", icon: MySQLIcon },
        { name: "PostgreSQL", icon: PostgreSQLIcon },
        { name: "MongoDb", icon: MongoDbIcon },
        { name: "Python", icon: PythonIcon },
        { name: "NodeJs", icon: NodeIcon }

    ],

    frontend: [
        { name: "HTML", icon: htmlIcon },
        { name: "CSS", icon: cssIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "TypeScript", icon: TypeScriptIcon },
        { name: "React", icon: reactIcon },
        { name: "Next", icon: Next },
        { name: "Angular", icon: angularIcon },
        { name: "Tailwind", icon: TailwindIcon },
    ],
    
    herramientas: [
        { name: "Docker", icon: dockerIcon },
        { name: "Git", icon: gitIcon },
        { name: "GitHub", icon: GitHubIcon },
        { name: "JUnit", icon: junitIcon },
        { name: "Swagger", icon: SwaggerIcon },
        { name: "Postman", icon: postmanIcon },
        { name: "Figma", icon: figmaIcon },
        { name: "n8n", icon: n8nIcon }
    ]
};

// Stack agrupado por capacidad (solo tecnologías usadas en proyectos y experiencia reales).
// `icon` es opcional: si no hay logo propio se muestra solo el nombre.
export const stack = [
    {
        id: 'ai',
        featured: true,
        items: [
            { name: "n8n", icon: n8nIcon },
            { name: "Python", icon: PythonIcon },
            { name: "OpenAI" },
            { name: "Deepgram" },
            { name: "Ollama" },
            { name: "Claude Code" },
            { name: "MCP" },
            { name: "RAG" },
            { name: "Twilio" },
            { name: "WebRTC" },
            { name: "Firecrawl" },
        ],
    },
    {
        id: 'backend',
        items: [
            { name: "FastAPI" },
            { name: "NodeJs", icon: NodeIcon },
            { name: "SpringBoot", icon: springIcon },
            { name: "Java", icon: javaIcon },
            { name: "PHP", icon: phpIcon },
        ],
    },
    {
        id: 'frontend',
        items: [
            { name: "React", icon: reactIcon },
            { name: "Next", icon: Next },
            { name: "Angular", icon: angularIcon },
            { name: "TypeScript", icon: TypeScriptIcon },
            { name: "JavaScript", icon: jsIcon },
            { name: "Tailwind", icon: TailwindIcon },
            { name: "HTML", icon: htmlIcon },
            { name: "CSS", icon: cssIcon },
        ],
    },
    {
        id: 'data',
        items: [
            { name: "PostgreSQL", icon: PostgreSQLIcon },
            { name: "Supabase" },
            { name: "MySQL", icon: MySQLIcon },
            { name: "MongoDb", icon: MongoDbIcon },
            { name: "SQLite" },
        ],
    },
    {
        id: 'infra',
        items: [
            { name: "Docker", icon: dockerIcon },
            { name: "Dokploy" },
            { name: "Git", icon: gitIcon },
            { name: "GitHub", icon: GitHubIcon },
            { name: "Postman", icon: postmanIcon },
            { name: "Swagger", icon: SwaggerIcon },
            { name: "JUnit", icon: junitIcon },
            { name: "Figma", icon: figmaIcon },
        ],
    },
];
