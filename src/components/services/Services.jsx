import React from 'react'
import "./services.css"
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
    <h5>What I Offer</h5>
    <h2>Skills</h2>

    <div className="container services_container">
      {/* <article className='service'>
        <div className="service_head">
          <h3>Competitive Programmer</h3>
        </div>

        <ul className='service_list'>
          <li>
            <BiCheck className='service_list-icon' />
            <p>C++</p>
          </li>
          <li>
            <BiCheck className='service_list-icon' />
            <p>Coderforces</p>
          </li>
          <li>
            <BiCheck className='service_list-icon' />
            <p>CodeChef</p>
          </li>
          <li>
            <BiCheck className='service_list-icon' />
            <p>Leetcode</p>
          </li>
          <li>
            <BiCheck className='service_list-icon' />
            <p>Atcoder</p>
          </li>
          <li>
            <BiCheck className='service_list-icon' />
            <p>SPOJ</p>
          </li>
          
        </ul>
      </article> 
      */}
      {/* END OF CODER*/}

      <article className='service'>
        <div className="service_head">
          <h3>Web Development</h3>
        </div>

        <ul className='service_list'>
          <li>
            <BiCheck className='service_list-icon' />
            <p>HTML</p>
          </li>
          <li>
            <BiCheck className='service_list-icon' />
            <p>CSS</p>
          </li>
          <li>
            <BiCheck className='service_list-icon' />
            <p>JavaScript</p>
          </li>
          <li>
            <BiCheck className='service_list-icon' />
            <p>React Js</p>
          </li>
          <li>
            <BiCheck className='service_list-icon' />
            <p>Node Js</p>
          </li>
          <li>
            <BiCheck className='service_list-icon' />
            <p>Django</p>
          </li>
          <li>
            <BiCheck className='service_list-icon' />
            <p>Flutter</p>
          </li>
        </ul>
      </article>
      {/* END OF WEB DEVELOPMENT */}
      <article className='service'>
        <div className="service_head">
          <h3>Other</h3>
        </div>

        <ul className='service_list'>
          <li>
            <BiCheck className='service_list-icon' />
            <p>Competitive Programmer</p>
          </li>
          <li>
            <BiCheck className='service_list-icon' />
            <p>Blockchain</p>
          </li>
          <li>
            <BiCheck className='service_list-icon' />
            <p>Pentester</p>
          </li>
          <li>
            <BiCheck className='service_list-icon' />
            <p>Networking</p>
          </li>
          <li>
            <BiCheck className='service_list-icon' />
            <p>Linux</p>
          </li>
          <li>
            <BiCheck className='service_list-icon' />
            <p>Shell Scripting</p>
          </li>
          <li>
            <BiCheck className='service_list-icon' />
            <p>Cloud Computing</p>
          </li>
        </ul>
      </article>
      {/* END OF Other*/}
    </div>
    </section>
  )
}

export default Services