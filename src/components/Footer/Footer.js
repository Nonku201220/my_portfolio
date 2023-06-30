import React from 'react';
import './Footer.css';
import Wave from '../../img/wave.png';
import { UilFacebook, UilGithub } from '@iconscout/react-unicons';

const Footer = () => {
  return (
    <div className='footer' style={{ marginTop: '-1rem' }}>
      <img src={Wave} alt='' style={{ width: '100%' }} />
      <div className='f-content'>
        <span>wwww.nonkululekontotoshe87@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.facebook.com/nonkululeko.nkuliegh.7" target="_blank" rel="noopener noreferrer">
            <UilFacebook color="white" size="3rem" />
          </a>
          <a href="https://github.com/Nonku201220" target="_blank" rel="noopener noreferrer">
            <UilGithub color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
