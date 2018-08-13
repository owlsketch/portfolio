import React from 'react'

import ProjectDisplay from './ProjectDisplay'
import ProjectArticle from './ProjectArticle'

import './Projects.scss'

function Pixel () {
  return (
    <React.Fragment>
      <section className="landing">
        <ProjectDisplay projectName="pixel"/>
      </section>
      <section className="proj_article">
        <ProjectArticle />
      </section>
    </React.Fragment>
  )
}

export default Pixel
