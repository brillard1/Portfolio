import React from 'react'
import "./projects.css"
import IMG1 from '../../assets/portfolio.png'
import IMG2 from '../../assets/ser.png'
import IMG3 from '../../assets/SummarYT_final.png'
import IMG4 from '../../assets/personlaity_detection_project_final.png'
import IMG5 from '../../assets/Blogtek.png'
import IMG6 from '../../assets/babble_final.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio',
    github: 'https://github.com/brillard1/Portfolio',
    demo: 'https://brillard.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'SER: Speech Emotion Recognition using AI',
    github: 'https://github.com/brillard1/Speech_Emotion_Recognition',
    demo: 'https://emotion-detection-dep.herokuapp.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'SummarYT: YouTube Transcript Summarizer',
    github: 'https://github.com/brillard1/yt-transcript-summarizer',
    demo: 'https://summaryt.herokuapp.com/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Personality Detection',
    github: 'https://github.com/brillard1/Personality-Detection',
    demo: '$'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Blogtek: Technical Blogging Website',
    github: 'https://github.com/brillard1/blogtek',
    demo: '$'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Babble: A Chat Web App',
    github: 'https://github.com/brillard1/babble',
    demo: '$'
  },
]

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container project_container">
        {
        data.map(({id, image, title, github, demo}) => {
          return (
              <article key = {id} className='project_item'>
                <div className='project_item-image'>
                  <img src = {image} alt = {title} />
                </div>
                <h3>{title}</h3>
                <div className="project_item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  {(() => {
                  if (demo!=='$'){
                    return (
                    <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    )
                  }
                })() }
                </div>
          </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Projects