import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faBook, faMusic, faGlobe, faCode, faBrain, faCogs } from '@fortawesome/free-solid-svg-icons';

class Interests extends React.Component {
  render() {
    return (
      <div>
        <h1>INTERESTS</h1>
        <ul className="interests-list">
          <li>
            <FontAwesomeIcon icon={faCode} /> <strong>Open Source Contribution</strong>
            <p>Passionate about contributing to open-source projects and collaborating with the developer community to create impactful software.</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faGamepad} /> <strong>Gaming & Game Development</strong>
            <p>Enjoys both playing and developing video games. Interested in game mechanics, AI in gaming, and using Unity or Unreal Engine for creating indie games.</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faBook} /> <strong>Technical Reading & Writing</strong>
            <p>Loves to stay updated with the latest trends in technology by reading technical books and blogs. Also enjoys writing tutorials and sharing knowledge with others.</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faMusic} /> <strong>Music Production</strong>
            <p>Interested in creating electronic music using digital audio workstations (DAWs) like FL Studio and Ableton Live. Combines coding skills with music through creative coding projects.</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faGlobe} /> <strong>Travel & Culture Exploration</strong>
            <p>Passionate about traveling to different parts of the world, learning about new cultures, and exploring how technology influences various societies.</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faBrain} /> <strong>Artificial Intelligence & Machine Learning</strong>
            <p>Fascinated by AI and machine learning. Enjoys experimenting with neural networks and AI models, and exploring their applications in various industries.</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faCogs} /> <strong>Automation & Smart Home Technology</strong>
            <p>Enthusiastic about home automation and IoT. Loves tinkering with smart devices, building automated systems, and integrating them for a smarter living environment.</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Interests;
