import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Services from './components/services/Services'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <Experience />
        <Projects />
        <About />
        <Services />
        <Contact />
        <Footer />
    </>
  )
}

export default App