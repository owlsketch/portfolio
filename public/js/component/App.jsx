import React from 'react'
import { Route } from 'react-router-dom'

import Navigation from './navigation/Navigation'
import Project from './Project'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.projects = ['gallery', 'pixel']
  }

  render () {
    const projects = this.projects

    return (
      <React.Fragment>
        <Navigation projects={projects} />
        <Route path="/projects/gallery"
          render={ (projects) => <Project project="gallery" /> }
        />
        <Route path="/projects/pixel"
          render={ (projects) => <Project project="pixel" /> }
        />
      </React.Fragment>
    )
  }
}

export default App
