import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

const Contact = () => {
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
      <div className="px-3 container contact-page">
        <div className="text-zone"> 
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              index={15}
            />
          </h1>
          <h2>
            <b>Phone</b>
          </h2>
          <h4>(+91) 7592990633</h4>
          <br />
          <h2>
            <b>Email</b>
          </h2>
          <h4>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=anaghas686@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
             <u>anaghas686@gmail.com</u> 
            </a>
          </h4>
        </div>
        <div className='info-map'>
          Anagha S,
          <br />
          India,
          <br />
          BTM 2nd Stage<br />
          Bangalore
        </div>
        <div className='map-wrap'>
          <MapContainer center={[12.913128529947342, 77.61307851248957]} zoom={20}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[12.913128529947342, 77.61307851248957]}>
              
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="ball-scale-ripple" />
    </div>
  );
};

export default Contact;
