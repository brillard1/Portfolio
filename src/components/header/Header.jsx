import React from 'react'
import "./header.css"
// import CTA from './CTA'
import pfp from '../../assets/pfp.png'
import HeaderSocial from './HeaderSocials'
import Letter from './Letter'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        {/* <h5>Hello I'm</h5>
        <h1>Abhishek Rajora</h1>
        <h5 className="text-light">Algorithms and Fullstack Developer</h5>
        <h2 className="quote">I work with algorithms<br/> and create responsive websites.</h2> */}

        <div className='resp'>

        <div><Letter /></ div>
          <div>
            <div className="me">
              <img src={pfp} alt="me" />
            </div>
          </div>

          {/* <div></div>
          <div><CTA /></ div> */}

        </div>

        <HeaderSocial />

        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default Header