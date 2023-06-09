import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import './Services.css';
import Nonku from './nonku.pdf';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import { themeContext } from '../../Context';
import Card from '../Card/Card';


const Services = () => {
  const transition = { duration: 1, type: 'spring' };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='services' id='Services'>
      {/* left */}
      <div className='awesome'>
        <a href={Nonku} download>
          <button className='button s-button'>Download CV</button>
        </a>
        <div className='blur s-blur' style={{ background: '#ABF1FF94' }}></div>
      </div>
      {/* right */}
      <div className='cards'>
        <motion.div
          initial={{ left: '17rem' }}
          whileInView={{ left: '14rem' }}
          transition={transition}
          style={{ left: '14rem' }}
        >
          <Card
            emoji={HeartEmoji}
            heading={'Design'}
            detail={'Figma, Sketch, Adobe'}
          />
        </motion.div>

        <motion.div
          initial={{ right: '25rem' }}
          whileInView={{ left: '-4rem' }}
          transition={transition}
          style={{ top: '12rem', left: '-4rem' }}
        >
          <Card
            emoji={Glasses}
            heading={'Developer'}
            detail={'Html, Css, Javascript, React'}
          />
        </motion.div>

        <motion.div
          initial={{ left: '25rem' }}
          whileInView={{ left: '12rem' }}
          transition={transition}
          style={{ top: '19rem', left: '12rem' }}
        >
          <Card
            emoji={Humble}
            heading={'UI/UX'}
            detail={
              'Creating the look and feel of an application’s user interface'
            }
          />
        </motion.div> 

        <div
          className='blur s-blur2'
          style={{ background: 'var(--purple)',  top: '5rem',
          width: '21rem',
          height: '11rem',
          left: '-19rem',}}
        ></div>
      </div>
    </div>
  );
};

export default Services;

