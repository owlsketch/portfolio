import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { getNextProject } from './navHelper'

import './Arrow.scss'

class Arrow extends React.Component {

  render () {
    const path = this.props.location.pathname
    const projects = this.props.projects
    const direction = this.props.direction.toLowerCase()

    const nextProject = getNextProject(path, projects, direction)

    const classes = `arrow ${direction}_arrow`
    const altText = `${direction} arrow`

    return (
      <Link to={nextProject}>
        <img width="46px" className={classes} src="/img/landing/arrow.svg" alt={altText} />
      </Link>
    )
  }
}

Arrow.defaultProps = {
  direction: 'left'
}

Arrow.propTypes = {
  direction: PropTypes.string,
  projects: PropTypes.array,
  location: PropTypes.object
}

export default withRouter(Arrow)
