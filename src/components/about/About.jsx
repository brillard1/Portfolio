import React from 'react'
import "./about.css"
import pfp from '../../assets/pfp.png'
import {SiWebpack} from 'react-icons/si'
import {IoMdAnalytics} from 'react-icons/io'
import {SiCodeforces} from 'react-icons/si'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={pfp} alt='' />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <SiWebpack className='about_icon' />
              <h2>Web Development</h2>
              <small>5 Projects</small>
            </article>
            <article className='about_card'>
              <IoMdAnalytics className='about_icon' />
              <h2>Macchine Learning</h2>
              <small>3 Projects</small>
            </article>
            <article className='about_card'>
              <SiCodeforces className='about_icon' />
              <h2>Competitive Programming</h2>
              <small>1 year</small>
            </article>
          </div>
          <p>
          Currently pursuing B.Tech in Computer Science and Engineering from IIT Jodhpur. Since these recent years I've developed interest inclined towards algorithms, development and pentesting. I keep myself updated with upcoming software services to help companies achieve their highest potetntial.
          </p>

          <a href='#contact' className='btn btn-primary'>Hire Me</a>
        </div>
      </div>
    </section>
     
  )
}

export default About