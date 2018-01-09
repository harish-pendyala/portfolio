import React, { Component } from 'react'
import Header from './Components/Header'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import About from './Components/About'
import Contact from './Components/Contact'
import Experience from './Components/Experience'

class App extends Component {
  render() {
    return (
      <main className='app'>
        <Header />
        <Projects />
        <Skills />
        <Experience />
        <About />
        <Contact />
      </main>
    )
  }
}

export default App
