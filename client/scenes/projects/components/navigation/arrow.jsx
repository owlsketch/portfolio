import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import EventHandler from '../../../../components/eventHandler/eventHandler.jsx'
import { getNextProject } from '../../navHelper.js'

import './arrow.scss'

class Arrow extends React.Component {
  constructor (props) {
    super(props)

    this.state = { arrowStyle: { opacity: 1 } }

    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll (e) {
    let opacityVal = 1
    let initialRange = window.pageYOffset / (window.innerHeight / 2.25)

    initialRange < 1 ? opacityVal = 1 - initialRange : opacityVal = 0

    this.setState({ arrowStyle: { opacity: opacityVal } })
  }

  render () {
    const path = this.props.location.pathname
    const projects = this.props.projects
    const direction = this.props.direction.toLowerCase()

    const nextProject = getNextProject(path, projects, direction)

    const classes = `arrow ${direction}_arrow`
    const altText = `${direction} arrow`

    return (
      <EventHandler onScroll={this.handleScroll}>
        <Link to={nextProject}>
          <img
            width="46px" className={classes} style={this.state.arrowStyle}
            src="/assets/img/landing/arrow.svg" alt={altText}
          />
        </Link>
      </EventHandler>
    )
  }
}

Arrow.defaultProps = { direction: 'left' }

Arrow.propTypes = {
  direction: PropTypes.string,
  projects: PropTypes.array,
  location: PropTypes.object
}

export default withRouter(Arrow)
