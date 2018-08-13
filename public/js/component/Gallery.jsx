import React from 'react'

import ProjectDisplay from './ProjectDisplay'
import ProjectArticle from './ProjectArticle'

import './Projects.scss'

function Gallery () {
  return (
    <React.Fragment>
      <section className="landing">
        <ProjectDisplay projectName="gallery"/>
      </section>
      <section className="proj_article">
        <ProjectArticle />
      </section>
    </React.Fragment>
  )
}

export default Gallery
