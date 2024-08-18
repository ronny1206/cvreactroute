import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faGraduationCap, faCog, faHeart, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import Avatar from '../assets/my.jpg'; // Import avatar

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="avatar-container">
          <img src={Avatar} alt="Avatar" className="avatar" />
        </div>
        <div className="menu">
          <Link to="/home"><FontAwesomeIcon icon={faHome} /> HOME</Link>
          <Link to="/about"><FontAwesomeIcon icon={faUser} /> ABOUT</Link>
          <Link to="/experience"><FontAwesomeIcon icon={faBriefcase} /> EXPERIENCE</Link>
          <Link to="/education"><FontAwesomeIcon icon={faGraduationCap} /> EDUCATION</Link>
          <Link to="/skills"><FontAwesomeIcon icon={faCog} /> SKILLS</Link>
          <Link to="/interests"><FontAwesomeIcon icon={faHeart} /> INTERESTS</Link>
          <Link to="/awards"><FontAwesomeIcon icon={faTrophy} /> AWARDS</Link>
        </div>
      </div>
    );
  }
}

export default Sidebar;
