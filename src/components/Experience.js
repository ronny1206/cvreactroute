import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faDatabase, faMobileAlt, faCloud, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

class Experience extends React.Component {
  render() {
    return (
      <div>
        <h1>EXPERIENCE</h1>
        <ul className="experience-list">
          <li>
            <FontAwesomeIcon icon={faLaptopCode} /> <strong>Full-Stack Developer at Tech Innovators</strong> (2022 - Present)
            <p>Developed and maintained web applications using React, Node.js, and MongoDB. Worked on both front-end and back-end, ensuring seamless integration between UI/UX and server-side logic.</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faDatabase} /> <strong>Database Administrator at DataCorp</strong> (2020 - 2022)
            <p>Managed and optimized large-scale databases, performed data migration and ensured data security. Specialized in MySQL and PostgreSQL.</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faMobileAlt} /> <strong>Mobile App Developer at MobileCraft</strong> (2018 - 2020)
            <p>Designed and developed cross-platform mobile applications using Flutter. Focused on performance optimization and enhancing user experience.</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faCloud} /> <strong>Cloud Engineer at CloudSolutions</strong> (2016 - 2018)
            <p>Implemented cloud infrastructure using AWS and Azure. Managed cloud services and automated deployments using CI/CD pipelines.</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faProjectDiagram} /> <strong>Software Engineer Intern at DevStart</strong> (2015 - 2016)
            <p>Assisted in developing and testing software applications. Gained hands-on experience with Java and Python, and contributed to team projects.</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Experience;
