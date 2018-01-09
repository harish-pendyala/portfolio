import React from 'react'
import LazyLoad from 'react-lazyload'

const Experience = () => (
  <section className='experience' id='contact'>
    <h2 className='heading'>
      Experience & Education<LazyLoad height={15}><hr className='divider' /></LazyLoad>
    </h2>
    <div className='content'>
      <div className='exp'>
      <h1>
      Experience
      </h1>
      <br/>
      <h2>
      Software Engineer Intern
      </h2>
      <h4>
      Shutterfly, Phoenix, AZ | May 2017 - Aug 2017
      </h4>
      <br/>
      <h2>
      Software Developer
      </h2>
      <h4>
      Infosys Limited, Bangalore, India | May 2014 - Jul 2016
      </h4>
      <br/>
      </div>
      <div className='external'>
        <div className='education'>
        <h1>
        Education
        </h1>
        <br/>
        <h2>
        Master of Science in Computer Science
        </h2>
        <h4>
        UNC Charlotte, Charlotte, NC | Aug 2016 - Dec 2017
        </h4>
        <h4>
        GPA: 4.0 / 4.0
        </h4>
        </div>
      </div>
    </div>
  </section>
)

export default Experience
