import React from 'react'
import { ProjectsData } from '../Data'
import LazyLoad from 'react-lazyload'

const Projects = () => (
  <section className='projects' id='projects'>
    <h2 className='heading'>
      Projects<LazyLoad height={15}><hr className='divider' /></LazyLoad>
    </h2>
    <main className='grid'>
      {
        ProjectsData.map((project, key) =>
          <LazyLoad height={200} key={key}>
            <article>
              <img src={project.image} alt={project.name + ' image'}  />
              <div className='text'>
                <h5 className='name'>{project.name}</h5>
                <p className='description'>{project.description}</p>
                <div className='buttons'>

                  {
                    project.sourceLink &&
                    <a
                      href={project.sourceLink}
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      <button name='source'>Source</button>
                    </a>
                  }
                </div>
              </div>
            </article>
          </LazyLoad>
        )
      }
    </main>
    <div className='triangle'></div>
  </section>
)

export default Projects
