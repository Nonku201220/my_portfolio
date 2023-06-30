import React, { useRef, useState, useContext } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import { themeContext } from '../../Context';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_r6dylxj',
        'template_8aei6ia',
        e.target,
        'kiow3ZjVhqTDkbKOX'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='contact-form'>
      <div className='c-left'>
        <div className='awesome'>
          {/*         <span style={{ color: darkMode ? 'white' : 'inherit', fontSize: '1.2rem', fontWeight: 'bold' }}>
  Get in touch
</span> */}
          <span style={{ fontSize: '1rem', display: 'flex', color: 'var(--orange)', fontWeight: 'bold', marginTop: '9rem', fontSize: '1.5rem' }}>Contact Me</span>

          <div className='blur s-blur' style={{ background: '#ABF1FF94' }}></div>
        </div>
      </div>

      <div className='c-right'>
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <input type="submit" value="Send" className="button co-button" />
          {done && <span>Thank you for getting in touch!</span>}
          <div className="blur c-blur" style={{ background: 'var(--purple)' }}></div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

