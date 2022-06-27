import React from 'react'
import "./experience.css"
import IMG1 from '../../assets/experience1.png'
import IMG2 from '../../assets/experience2.png'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id ='experience'>
      <h5>What I've Done</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Ubiquitous Sensor Data</h3>
          <h4>Currently Working</h4>
          <div className="experience_content">
            <div className='experience-image'>
              <img src={IMG1} alt=''/>
            </div>
            <article className='experience_details'>
              <AiOutlineArrowRight className='experience_details-icon' />
              <div>
                <p className='description'>
                Behavioral analysis (BA) on ubiquitous sensor data is the task of finding the latent distribution of features for 
                modeling user-specific characteristics. These characteristics, in 
                turn, can be used for a number of tasks including resource 
                management, power efficiency, and smart home applications.
                </p>
              </div>
            </article>
            <article className='experience_details'>
              <AiOutlineArrowRight className='experience_details-icon' />
              <div>
                <p className='description'>
                  In this work I propose a novel clustering technique for BA which can find hidden routines 
                  in ubiquitous data and also captures the pattern in the routines. 
                </p>
              </div>
            </article>
            <div className="experience_item-cta">
                  <a href="https://github.com/brillard1/Ubiquitous-Sensor-Data" className='btn' target='_blank' rel="noreferrer">Github</a>
                  {/* <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a> */}
            </div>
          </div>
        </div>

        {/* END OF DC */}

        <div className="experience_backend">
        <h3>SER: Speech Emotion Recognition</h3>
        <h4>Jan 2022 - May 2022</h4>
          <div className="experience_content">
            <article className='experience-image'>
              <img src={IMG2} alt=''/>
            </article>
            <article className='experience_details'>
              <AiOutlineArrowRight className='experience_details-icon' />
              <div>
                <p className='description'>
                Speech emotion recognition is an important problem receiving increasing interest from researchers
                 due to its numerous applications in practical life.
                </p>
              </div>
            </article>
            <article className='experience_details'>
              <AiOutlineArrowRight className='experience_details-icon' />
              <div>
                <p className='description'>
                In this project, I explore several deep-learning-based approaches along with 
                classical machine learning algorithms for an almost exhaustive analysis of the topic. 
                In doing so, I utilize the Ravdess dataset and perform extensive analysis of various algorithms.
                </p>
              </div>
            </article>
            <div className="experience_item-cta">
                  <a href="https://github.com/brillard1/Speech_Emotion_Recognition" className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href='https://emotion-detection-dep.herokuapp.com/' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          </div>
        </div>

        {/* END OF BACKEND */}

      </div>
    </section>
  )
}

export default Experience