import React,  { useRef }  from 'react';
import './Contact.css'
import img from '../src/components/OIG.jpg'
import emailjs from '@emailjs/browser';
import { Button } from './styles/Button';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yzoc38s', 'template_zamjgrr', form.current, 'NMspqcRrRSn547NM7')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email sent!');
      }, (error) => {
          console.log(error.text);
          alert('Please enter valid email!');
      });
  };

  return (
    <div className='contact'>
      <div className="contact_image">
        <img src={img}/> 
      </div>
      <form className="contact_form" ref={form} onSubmit={sendEmail}>
        <div className="Text">
          <h1>Let's Talk...!</h1>
        </div>
        <div className="name">
            <input type='name' placeholder='Enter your name' name='your_name' required></input>
        </div>
        <div className="name">
            <input type='email' placeholder='Enter email address' name='your_email' required></input>

        </div>
        <div className="name">
            <textarea type='message' placeholder='Describe message here' name='message' rows='7' required></textarea>
        </div>
        <Button type='submit' className="button">
          Send Message
        </Button>
      </form>
    </div>
  )
}

export default Contact
