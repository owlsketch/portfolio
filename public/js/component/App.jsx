import React from 'react'
import ProjectNav from './ProjectNav'
import ProjectDisplay from './ProjectDisplay'

import './App.scss'

function App () {
  return (
    <React.Fragment>
      <section className="landing">
        <ProjectNav />
        <ProjectDisplay />
      </section>
      <section className="proj_articles">
      </section>
    </React.Fragment>
  )
}

export default App
