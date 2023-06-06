import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { ThemeProvider, themeContext } from './Context';
import './App.css';
import { useContext } from 'react';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App" style={{ background: darkMode ? 'black' : '', color: darkMode ? 'white' : '' }}>
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

const AppWithThemeProvider = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default AppWithThemeProvider;


