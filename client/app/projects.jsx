import React from 'react'
import { withRouter, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import Nav from '../components/nav/nav.jsx'
import EventHandler from '../components/eventHandler/eventHandler.jsx'
import Footer from '../components/footer/footer.jsx'

import Navigation from './components/navigation/navigation.jsx'
import Project from './components/project.jsx'

import { getNextProject } from './navHelper.js'

class Projects extends React.Component {
  constructor (props) {
    super(props)
    this.projects = ['gallery', 'pixel']

    this.handleKey = this.handleKey.bind(this)
  }

  handleKey (e) {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return

    const direction = (e.key === 'ArrowRight') ? 'right' : 'left'
    const path = this.props.location.pathname

    const nextProject = getNextProject(path, this.projects, direction)

    this.props.history.push(nextProject)
  }

  render () {
    const projects = this.projects

    return (
      <React.Fragment>
        <Nav separate={true}/>
        <EventHandler onKeyPress={this.handleKey}>
          <Navigation projects={projects} />
          <Route path='/projects/gallery'
            render={ (projects) => <Project project='gallery' /> }
          />
          <Route path='/projects/pixel'
            render={ (projects) => <Project project='pixel' /> }
          />
        </EventHandler>
        <Footer/>
      </React.Fragment>
    )
  }
}

Projects.propTypes = { history: PropTypes.object, location: PropTypes.object }

export default withRouter(Projects)
