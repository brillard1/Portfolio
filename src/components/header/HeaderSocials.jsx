import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiCodeforces} from 'react-icons/si'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/abhishek-rajora/" target='blank'><BsLinkedin /></a>
        <a href="https://github.com/brillard1/" target='blank'><FaGithub /></a>
        <a href="https://codeforces.com/profile/Brillard" target='blank'><SiCodeforces /></a>
    </div>
  )
}

export default HeaderSocials