import React from 'react'
import ProjectNav from './ProjectNav'
import ProjectDisplay from './ProjectDisplay'
import ProjectArticle from './ProjectArticle'

import './App.scss'

function App () {
  return (
    <React.Fragment>
      <section className="landing">
        <ProjectNav />
        <ProjectDisplay />
      </section>
      <section className="proj_article">
        <ProjectArticle />
      </section>
    </React.Fragment>
  )
}

export default App
