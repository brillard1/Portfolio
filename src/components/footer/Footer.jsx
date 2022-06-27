import React from 'react'
import "./footer.css"
import {AiOutlineGithub} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'
import {ImLinkedin} from 'react-icons/im'


const Footer = () => {
  return (

    <footer>
      <a href='#header' className='footer_logo'>BRILLARD</a>
      
      <ul className='permalinks'>
        <li><a href='#header'>Home</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#services'>Skills</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href='https://github.com/brillard1/' target="_blank" rel="noreferrer"><AiOutlineGithub /></a>
        <a href='https://www.linkedin.com/in/abhishek-rajora/' target="_blank" rel="noreferrer"><ImLinkedin /></a>
        <a href='https://www.instagram.com/abhishek_rajora_/' target="_blank" rel="noreferrer"><FiInstagram /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; BRILLARD. All rights reserved.</small>
      </div>
    
    </footer>
  )
}

export default Footer