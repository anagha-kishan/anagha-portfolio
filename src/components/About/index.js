import { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons/faReact';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons/faBootstrap';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons/faNodeJs';
import { faDatabase } from '@fortawesome/free-solid-svg-icons/faDatabase';
import './index.scss';
import Loader from 'react-loaders';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons/faJsSquare';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              letterClass={letterClass}
              index={15}
            />
          </h1>
          <p>
            I am a Frontend Developer with 2+ years of experience building
            dynamic and secure web applications. My expertise includes React.js
            for responsive user interfaces and Node.js for server-side
            development, with a strong focus on UI/UX principles to deliver
            seamless user experiences.
          </p>
          <p>
            I have contributed to projects involving UI migrations, API
            integrations, and server deployments with Kubernetes. I am
            passionate about optimizing performance and security, proficient in
            CSS, Bootstrap, and managing backend data with Oracle DB. I excel in
            collaborative environments, working with cross-functional teams to
            deliver high-quality solutions. My experience has equipped me to
            adapt quickly to new frameworks and technologies.
          </p>
          <p>
            Eager to learn and grow, I am enthusiastic about contributing to
            impactful projects. Let’s connect to discuss frontend technologies,
            UI/UX design, or full-stack development.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faBootstrap} color="##ea80fc" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faNodeJs} color="#215732" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faDatabase} color="#fff" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="#000" />
            </div>
          </div>
        </div>
      </div>
      <Loader type='ball-scale-ripple'/>
    </div>
  );
};
export default About;
