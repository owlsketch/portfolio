import React from 'react'

import Nav from '../../components/nav/nav.jsx'

import './about.scss'

function About () {
  return (
    <div className="about_landing_wrapper">
      <section className="about_landing">
        <Nav/>

        <div className="about_content">
          <div className="description_wrapper">
            <section className="description">
              <img className="desc_title" width="285" src="/assets/img/about/titleText.png" alt="I am a creative maker near New York City"/>
              <img className="desc_owl" width="120" src="/assets/img/about/owlsketch.png"/>
              <p className="desc_par1">
                Hi! My name is Gibran Garcia. I like the idea of being able to wake up, decide that there is something missing in the world, and having the skills to make it a reality.
              </p>
              <p className="desc_par2">
                I&#39;m currently working on <a href="https://laika.gallery">Laika Gallery</a>, an app that lets artists create interactive art galleries for the web. Check out my <a href="/assets/GibranGarciaResume.pdf#zoom=100&view=Fit">resume</a> if you’d like to know more.
              </p>
              <p className="desc_par3">
                In my free time you can find me <a href="https://www.instagram.com/airbag_racing/">skateboarding</a> or taking <a href="https://www.instagram.com/airbag_racing/">photos</a>.
              </p>
              <p className="desc_par4" >
                Want to say hello? Get in touch at: <a href="mailto:os.ggarcia16@gmail.com"> os.ggarcia16@gmail.com </a>
              </p>
            </section>
          </div>
          <img className="profile" width="480" src="/assets/img/about/profile.jpg" alt="profile: Gibran Garcia"/>
        </div>
      </section>
    </div>
  )
}

export default About
