import React, { useRef, useState, useContext } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import { themeContext } from '../../Context';

const Contact = () => {
  const form = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_r6dylxj',
        'template_8aei6ia',
        form.current,
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

    // Reset the form fields after sending the email
    form.current.reset();
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
<span style={{ fontSize: '1rem', display:'flex',color: 'var(--orange)', fontWeight: 'bold', marginTop: '9rem', fontSize: '1.5rem' }}>Contact Me</span>

          <div className='blur s-blur' style={{ background: '#ABF1FF94' }}></div>
        </div>
      </div>

      <div className='c-right'>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='user_name' className='user' placeholder='Name' />
          <input type='email' name='user_email' className='user' placeholder='Email' />
          <textarea name='message' className='user' placeholder='Message' />
          <input type='submit' value='Send' className='button co-button' />
          <span>{done && 'Thank you for getting in touch!'}</span>
          <div className='blur c-blur' style={{ background: 'var(--purple)' }}></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;