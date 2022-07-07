import React from 'react'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './letter.css'
import Resume from '../../assets/Resume.pdf'

const Letter = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['A', 'b', 'h', 'i', 's', 'h', 'e', 'k', ' ', 'R', 'a', 'j', 'o', 'r', 'a']
    const jobArray = ['P', 'r', 'o', 'g', 'r', 'a', 'm', 'm', 'e', 'r', ' ', '/', ' ',
    'F', 'u', 'l', 'l', ' ',  's', 't', 'a', 'c', 'k', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
  
    useEffect(() => {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 6000)
    }, [])


  return (
    <>
      <div className="letter">
        <div className='text'>
        <div className="text-zone">
          <h1 class='sz'>
            <span className={`${letterClass} _11`}>H</span>
            <span className={`${letterClass} _12`}>e</span>
            <span className={`${letterClass} _13`}>l</span>
            <span className={`${letterClass} _14`}>l</span>
            <span className={`${letterClass} _15`}>o</span>
            <span className={`${letterClass} _16`}> </span>
            <span className={`${letterClass} _17`}>I</span>
            <span className={`${letterClass} _18`}>'</span>
            <span className={`${letterClass} _19`}>m</span>
            <span className={`${letterClass} _20`}>,</span>
            <br />
          </h1>
        </ div>
        
        <div className="text-zone">
          <h1 class='sz'>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={21}
            />
            <br />
            </h1>
        </ div>

        <div className="text-zone">
          <h1 className='passion'>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={54}
            />
          </h1>
        </div>
        </div>
        <div className='cta'>
          <a href={Resume} target='blank' className='btn'>View Resume</a>
          <a href='#contact' className='btn btn-primary'>Hire Me</a>
        </div>
      </div>
    </>
  )
}

export default Letter