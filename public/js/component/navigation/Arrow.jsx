import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './Arrow.scss'

class Arrow extends React.Component {
  linkedProject () {
    const direction = this.props.direction.toLowerCase()
    const path = this.props.location.pathname
    const projects = this.props.projects
    const activeProject = path.slice(10)
    const activeIndex = projects.indexOf(activeProject)

    let linkedIndex = -1
    if (direction === 'left') {
      linkedIndex = activeIndex - 1
      if (linkedIndex < 0) linkedIndex = projects.length - 1
    } else {
      linkedIndex = activeIndex + 1
      if (linkedIndex > projects.length - 1) linkedIndex = 0
    }

    return `/projects/${projects[linkedIndex]}`
  }

  render () {
    const linkedProject = this.linkedProject()
    const direction = this.props.direction.toLowerCase()
    const classes = `arrow ${direction}_arrow`
    const altText = `${direction} arrow`

    return (
      <Link to={linkedProject}>
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
