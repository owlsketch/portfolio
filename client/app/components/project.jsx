import React from 'react'
import PropTypes from 'prop-types'

import Landing from './landing.jsx'
import Article from './article.jsx'

function Project (props) {
  const project = props.project.toLowerCase()

  return (
    <React.Fragment>
      <Landing project={project}/>
      <Article project={project}/>
    </React.Fragment>
  )
}

Project.propTypes = { project: PropTypes.string }

export default Project
