import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faServer, faCloud, faMobileAlt, faProjectDiagram, faShieldAlt, faBug, faLaptopCode, faToolbox, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

class Skills extends React.Component {
  render() {
    return (
      <div>
        <h1>SKILLS</h1>
        <ul className="skills-list">
          <li>
            <FontAwesomeIcon icon={faCode} /> <strong>JavaScript & React</strong> (5+ Years)
            <p>Extensive experience in developing dynamic web applications using JavaScript and React. Strong knowledge of ES6+, Redux, and hooks.</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faDatabase} /> <strong>Database Management (SQL & NoSQL)</strong> (4+ Years)
            <p>Proficient in designing, optimizing, and maintaining databases using MySQL, PostgreSQL, and MongoDB.</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faServer} /> <strong>Backend Development (Node.js & Express)</strong> (4+ Years)
            <p>Expertise in building scalable server-side applications using Node.js and Express. Experienced in RESTful API development.</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faCloud} /> <strong>Cloud Computing (AWS & Azure)</strong> (3+ Years)
            <p>Skilled in deploying and managing cloud infrastructure using AWS and Azure. Knowledge of serverless architecture and cloud security.</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faMobileAlt} /> <strong>Mobile App Development (Flutter & React Native)</strong> (3+ Years)
            <p>Developed cross-platform mobile applications with Flutter and React Native. Focus on performance optimization and smooth user experience.</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faProjectDiagram} /> <strong>Agile & Scrum Methodologies</strong> (5+ Years)
            <p>Experience leading and working in agile teams, managing sprints, and delivering high-quality software products on time.</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faShieldAlt} /> <strong>Cybersecurity Best Practices</strong> (3+ Years)
            <p>Knowledge of securing applications and infrastructure, including encryption, authentication, and vulnerability management.</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faBug} /> <strong>Testing & Debugging (Jest, Mocha, Selenium)</strong> (4+ Years)
            <p>Proficient in writing and executing unit tests, integration tests, and end-to-end tests. Experienced in identifying and fixing bugs efficiently.</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faLaptopCode} /> <strong>Version Control (Git & GitHub)</strong> (5+ Years)
            <p>Strong understanding of version control systems, branching strategies, and collaborative workflows using Git and GitHub.</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faToolbox} /> <strong>DevOps & CI/CD (Jenkins, Docker, Kubernetes)</strong> (3+ Years)
            <p>Experience in setting up CI/CD pipelines and automating deployments using Jenkins, Docker, and Kubernetes.</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faNetworkWired} /> <strong>Networking Fundamentals</strong> (4+ Years)
            <p>Solid understanding of networking principles, including TCP/IP, DNS, and network troubleshooting.</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Skills;
