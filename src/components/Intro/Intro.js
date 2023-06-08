import React, { useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Facebook from '../../img/Facebook.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
/* import nonku3 from '../../img/nonku3.png'; */
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';

const Intro = () => {
  const transition = { duration: 2, type: 'spring' };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='intro'>
      <div className='i-left'>
        <div className='i-name'>
          <span style={{ color: darkMode ? 'white' : '' }}>Hi! I am</span>
          <span> Nonkululeko Ntotoshe </span>
          <span>
            Frontend Developer with a high level of experience in web design
            and development
          </span>
        </div>
        <button className='button i-button'>Hire me!</button>
        <div className='i-icons'>
          <img src={Github} alt='' />
          <img src={LinkedIn} alt='' />
          <img src={Facebook} alt='' />
        </div>
      </div>
      <div className='i-right'>
        <img src={Vector1} alt='' />
        <img src={Vector2} alt='' />
      {/*   <img src={nonku3} alt='' />  */}

        <motion.img
          initial={{ left: '-36%' }}
          whileInView={{ left: '-24%' }}
          transition={transition}
          src={glassesimoji}
          alt=''
        />
        <motion.div
          initial={{ top: '-4%', left: '74%' }}
          whileInView={{ left: '68%' }}
          transition={transition}
          style={{ top: '-4%', left: '68%' }} className='floating-div'>
          <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
        </motion.div>
        <div
          className='blur'
          style={{ background: 'rgb(238 210 255)',  top: '15rem',
          width: '21rem',
          height: '11rem',
          left: '10rem', }}
          
        ></div>
        <div
          className='blur'
          style={{
            background: '#C1F5FF',
            top: '75rem',
            width: '21rem',
            height: '11rem',
            left: '25rem',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;






