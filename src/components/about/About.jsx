import React from 'react'
import "./about.css"
import pfp from '../../assets/pfp.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

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
              <FaAward className='about_icon' />
              <h2>Web Development</h2>
              <small>5 Projects</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h2>Macchine Learning</h2>
              <small>3 Projects</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
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