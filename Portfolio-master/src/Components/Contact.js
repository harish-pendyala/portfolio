import React from 'react'
import LazyLoad from 'react-lazyload'

const Contact = () => (
  <section className='contact' id='contact'>
    <h2 className='heading'>
      Contact<LazyLoad height={15}><hr className='divider' /></LazyLoad>
    </h2>
    <div className='content'>
      <form
        action='https://formspree.io/harish.pendyala1@gmail.com'
        className='form'
        method='POST'
      >
        <input
          className='name'
          name='Name'
          placeholder='Name'
          type='text'
        />
        <input
          className='email'
          name='Email'
          placeholder='Email'
          type='email'
        />
        <input
          className='phone'
          name='Phone'
          placeholder='Phone'
          type='tel'
        />
        <textarea
          className='message'
          name='Message'
          placeholder='Message'
          required='true'
          rows='8'
          type='text'
        />
        <div className='buttons'>
          <button type='submit'>Send</button>
          <button type='reset'>Reset</button>
        </div>
      </form>
      <div className='external'>
        <div className='info-row'>
          <h4 className='location'>Charlotte, NC</h4>
          <h4 className='phone-number'>(425) 213-0467</h4>
          <h4 className='email-address'>harish.pendyala1@gmail.com</h4>
        </div>
        <div className='divider-row'><hr className='divider' /></div>
        <LazyLoad height={50} offset={150}>
          <nav className='icons-row'>
            <div className='icon-column'>
              <a
                aria-label='My LinkedIn'
                className='tooltipped'
                href='https://www.linkedin.com/in/harish-pendyala/'
                rel='noopener noreferrer'
                target='_blank'
              >
                <span className='tooltip'>LinkedIn</span>
                <i className='icon-linkedin'></i>
              </a>
            </div>
            <div className='icon-column'>
              <a
                aria-label='Send Email'
                className='tooltipped'
                href='mailto:harish.pendyala1@gmail.com'
              >
                <span className='tooltip'>Email</span>
                <i className='icon-email'></i>
              </a>
            </div>
            <div className='icon-column'>
              <a
                aria-label='My GitHub'
                className='tooltipped'
                href='https://github.com/harish-pendyala'
                rel='noopener noreferrer'
                target='_blank'
              >
                <span className='tooltip'>GitHub</span>
                <i className='icon-github'></i>
              </a>
            </div>
            <div className='icon-column'>
              <a
                aria-label='Call Me'
                className='tooltipped'
                href='tel:14252130467'
              >
                <span className='tooltip'>Call</span>
                <i className='icon-phone'></i>
              </a>
            </div>
          </nav>
        </LazyLoad>
        <div className='divider-row'><hr className='divider' /></div>
        <footer className='footer'>
          <p className='footnote'>
            Banner: <i>The Orion Nebula taken from a backyard in Petaluma,
            California</i> by Bryan Goff
          </p>
          <p className='footnote'>
            Website: Copyright © 2018 Harish Pendyala.
            All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  </section>
)

export default Contact
