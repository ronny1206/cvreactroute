import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCode, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

class Education extends React.Component {
  render() {
    return (
      <div>
        <h1>EDUCATION</h1>
        <ul className="education-list">
          <li>
            <FontAwesomeIcon icon={faGraduationCap} /> <strong>Bachelor of Science in Computer Science</strong> - University of Techland (2014 - 2018)
            <p>Specialized in software development, algorithms, and data structures. Participated in various coding competitions and contributed to open-source projects.</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faLaptopCode} /> <strong>Master of Science in Software Engineering</strong> - Global Tech University (2018 - 2020)
            <p>Focused on advanced software engineering principles, cloud computing, and agile methodologies. Completed a thesis on microservices architecture.</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faCode} /> <strong>Full-Stack Web Development Bootcamp</strong> - Code Academy (2021)
            <p>Intensive 6-month bootcamp covering full-stack web development using MERN stack. Developed several projects, including a real-time chat application and an e-commerce platform.</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Education;
