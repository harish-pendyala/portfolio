import React from 'react'

const Header = () => (
  <section className='header' id='header'>
    <nav className='navbar'>
    <ul>
      <li >
        <a className='link' onClick={() => window.location.reload()}>
          <span className='bra'>〈</span>
            Harish Pendyala
          <span className='ket'>〉</span>
        </a>
      </li>


      <li className='nav-right'>
        <a href='#contact'>
          <span className='bra'>〈</span>
            contact
          <span className='ket'>〉</span>
        </a>
      </li>
      <li className='nav-right' >
        <a href='#about'>
          <span className='bra'>〈</span>
            about
          <span className='ket'>〉</span>
        </a>
      </li>
      <li className='nav-right' >
        <a href='#experience'>
          <span className='bra'>〈</span>
            expereince & education
          <span className='ket'>〉</span>
        </a>
      </li>
      <li className='nav-right'>
        <a href='#skills'>
          <span className='bra'>〈</span>
            skills
          <span className='ket'>〉</span>
        </a>
      </li>
      <li className='nav-right'>
        <a href='#projects'>
          <span className='bra'>〈</span>
            projects
          <span className='ket'>〉</span>
        </a>

      </li>
      </ul>
    </nav>
    <div className='content'>
      <h1 className='title'>Harish Pendyala</h1>
      <h3 className='subtitle'>Java Developer | Full-Stack Developer | Software Engineer</h3>
    </div>
    <div className='triangle'></div>
  </section>
)

export default Header
