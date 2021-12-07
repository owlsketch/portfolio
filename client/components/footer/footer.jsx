import React from 'react'

import './footer.scss'

function Footer (props) {
  return (
    <React.Fragment>
      <section className='footer_sections'>
        <div className='pink_section'></div>
        <div className='mango_section'></div>
      </section>

      <section className='footer_wrapper'>
        <div className='footer_content'>
          <div>
            <img className='footer_logo' src='/assets/img/logo.png' width='150' />
            <p className='footer_subHeader'>2018-{new Date().getFullYear()}, Gibran Garcia.</p>
          </div>
          <span className='icon_list'>
            <a href='https://github.com/owlsketch'>
              <img width='20px' src='/assets/img/githubIcon.svg' alt='github'/>
            </a>
            <a href='https://twitter.com/owlsketch'>
              <img width='20px' src='/assets/img/twitterIcon.svg' alt='twitter'/>
            </a>
            <a href='https://www.instagram.com/airbag.racing/'>
              <img width='20px' src='/assets/img/instagramIcon.svg' alt='instagram'/>
            </a>
          </span>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Footer
