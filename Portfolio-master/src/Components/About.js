import React from 'react'
import LazyLoad from 'react-lazyload'

const About = () => (
  <section className='about' id='about'>
    <h2 className='heading'>
      About<LazyLoad height={15}><hr className='divider' /></LazyLoad>
    </h2>
    <div className='content'>
      <div className='portrait-container'>
        <LazyLoad height={280} offset={100}>
          <div className='portrait' />
        </LazyLoad>
      </div>
      <div className='bio'>
        <p>
          Recent Gradute from The University of North Carolina at Charlotte in Master of Science in Computer Science, and lover
          of learning.
        </p>
        <br />
        <p>
          A passionate Software Developer having 3 years success devising innovative and tailored solutions.
        </p>
      </div>
    </div>
    <div className='triangle'></div>
  </section>
)

export default About
