import React from 'react'
import LazyLoad from 'react-lazyload'

const resume = require('../Media/resume.pdf')

const Skills = () => (
  <section className='skills'  id='skills'>
    <h2 className='heading'>
      Skills<LazyLoad height={15}><hr className='divider' /></LazyLoad>
    </h2>
    <div className='content'>
      <div className='langs'>
        <div className='left'>
          <LazyLoad height={100}><span className='java-icon' /></LazyLoad>
          <h5>Java</h5>
          <h6>Spring</h6>
          <h6>SpringBoot</h6>
          <h6>Android</h6>
        </div>
        <div className='middle'>
          <LazyLoad height={100}><span className='web-icon' /></LazyLoad>
          <h5>Web Technologies</h5>
          <h6>HTML5 / CSS3</h6>
          <h6>JSON / XML / AJAX</h6>
          <h6>RESTful API</h6>
        </div>

        <div className='right'>
          <LazyLoad height={100}><span className='js-icon' /></LazyLoad>
          <h5>JavaScript</h5>
          <h6>React / Redux</h6>
          <h6>Angular </h6>
          <h6>TypeScript</h6>
        </div>
        </div>
        <div className='langs'>
        <div className='left'>
          <LazyLoad height={100}><span className='j2ee-icon' /></LazyLoad>
          <h5>J2EE</h5>
          <h6>JSP</h6>
          <h6>Servlets</h6>
          <h6>JDBC</h6>
        </div>

        <div className='middle'>
          <LazyLoad height={100}><span className='database-icon' /></LazyLoad>
          <h5>Databases</h5>
          <h6>MySQL</h6>
          <h6>SQLite</h6>
          <h6>Firebase</h6>
        </div>
        <div className='right'>
          <LazyLoad height={100}><span className='aws-icon' /></LazyLoad>
          <h5>AWS</h5>
          <h6>MapReduce</h6>
          <h6>Hadoop / Spark</h6>
          <h6>EC2 / EMR / S3</h6>
        </div>
        </div>
        <div className='langs'>
        <div className='left'>
          <LazyLoad height={100}><span className='misc-icon' /></LazyLoad>
          <h5>Misc</h5>
          <h6>Hibernate</h6>
          <h6>JPA</h6>
          <h6>Git</h6>
        </div>
        <div className='middle'>
          <LazyLoad height={100}><span className='tools-icon' /></LazyLoad>
          <h5>Tools</h5>
          <h6>Eclipse / Intellij IDE / Android Studio</h6>
          <h6>MySQL Workbench</h6>
          <h6>Tomcat / XAMPP</h6>
        </div>
      </div>
      <div className='download-container'>
        <a
          className='download-link'
          href={resume}
          download='Harish_Pendyala_resume.pdf'
        >
          <button className='download-button'>Download Resume</button>
        </a>
      </div>
    </div>
    <div className='triangle'></div>
  </section>
)

export default Skills
