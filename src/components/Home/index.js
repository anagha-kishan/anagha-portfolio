import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = [' ', 'A', 'n', 'a', 'g', 'h', 'a'];
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            {/* Hi, <br/> I'm  */}
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _12`}>I</span>
            <span className={`${letterClass} _12`}>'m</span>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              index={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              index={22}
            />
          </h1>
          <h2>Frontend Developer</h2>
          <a
            href="https://drive.google.com/file/d/1MpphPPPTdaZM6IQfRITC0YdwmDh7UPjI/view?usp=sharing"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="flat-button"
          >
            Download Resume
          </a>
        </div>
      </div>
      <Loader type="ball-scale-ripple" />
    </>
  );
};

export default Home;
