import React, { useContext } from 'react';
import './Toggle.css';
import  Sun from '@iconscout/react-unicons/icons/uil-sun';
import  Moon from '@iconscout/react-unicons/icons/uil-moon';
import { themeContext } from '../../Context';

const Toggle = ({ toggleDarkMode }) => {
  const theme = useContext(themeContext);
  const isDarkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: 'toggle' });
  };

  return (
    <div
      className={`toggle ${isDarkMode ? 'dark' : 'light'}`}
      onClick={handleClick}
    >
      <Moon className="icon" />
      <div className="toggle-button" onClick={toggleDarkMode}>
        <div className={`toggle-switch ${isDarkMode ? 'active' : ''}`}></div>
      </div>
      <Sun className="icon" />
    </div>
  );
};

export default Toggle;



