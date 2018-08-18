import React from 'react'
import { withRouter, Route } from 'react-router-dom'

import EventHandler from './EventHandler'
import Navigation from './navigation/Navigation'
import Project from './Project'

import { getNextProject } from './navigation/navHelper'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.projects = ['gallery', 'pixel']

    this.handleKey = this.handleKey.bind(this)
  }

  handleKey (e) {
    if(e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    
    const direction = (e.key === 'ArrowRight') ? 'right' : 'left'
    const path = this.props.location.pathname
    
    const nextProject = getNextProject(path, this.projects, direction) 
   
    this.props.history.push(nextProject) 
  }

  render () {
    const projects = this.projects

    return (
      <EventHandler onKeyPress={this.handleKey}>
        <Navigation projects={projects} />
        <Route path="/projects/gallery"
          render={ (projects) => <Project project="gallery" /> }
        />
        <Route path="/projects/pixel"
          render={ (projects) => <Project project="pixel" /> }
        />
      </EventHandler>
    )
  }
}

export default withRouter(App)
