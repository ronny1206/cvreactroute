import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faMedal, faAward, faStar, faCertificate, faCrown } from '@fortawesome/free-solid-svg-icons';

class Awards extends React.Component {
  render() {
    return (
      <div>
        <h1>AWARDS</h1>
        <ul className="awards-list">
          <li>
            <FontAwesomeIcon icon={faTrophy} /> <strong>Best Developer of the Year</strong> - Tech Innovators (2023)
            <p>Recognized as the top developer for outstanding performance, innovation, and leadership in the development team.</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faMedal} /> <strong>Outstanding Contribution to Open Source</strong> - Open Source Foundation (2022)
            <p>Awarded for significant contributions to major open-source projects, positively impacting the global developer community.</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faAward} /> <strong>Excellence in Mobile App Development</strong> - MobileCraft Awards (2021)
            <p>Received for developing a highly rated cross-platform mobile application with over 1 million downloads.</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} /> <strong>Top Innovator in Cloud Computing</strong> - CloudSolutions Awards (2020)
            <p>Honored for pioneering innovative cloud-based solutions and significantly enhancing cloud infrastructure efficiency.</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faCertificate} /> <strong>Certified Software Engineering Professional</strong> - Global Tech Certification (2019)
            <p>Achieved certification for demonstrating advanced skills and knowledge in software engineering practices.</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faCrown} /> <strong>Hackathon Champion</strong> - CodeFest International (2018)
            <p>Led a team to victory in a global hackathon, developing an innovative solution within 48 hours.</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Awards;
