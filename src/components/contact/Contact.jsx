import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o74n4k5', 'template_166zzor', form.current, 'j1p6_RgnoCRIVIVHI')

    e.target.reset();
  };

  return (
    <section id = 'contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='.contact_option-icon' />
            <h4>Email</h4>
            <h5>rajora.1@iitj.ac.in</h5>
            <a href="mailto:rajora.1@iitj.ac.in" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='.contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>+91-701-4684-556</h5>
            <a href="https://api.whatsapp.com/send?phone=917014684556" target="_blank" rel="noreferrer">WhatsApp me</a>
          </article>
        </div>
          {/* End of Contact Options */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact