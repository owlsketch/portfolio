import React from 'react'
import PropTypes from 'prop-types'

import ScrollLink from './navigation/ScrollLink'
import LandingImages from './content/LandingImages'

import './Landing.scss'

class Landing extends React.Component {
  render () {
    const project = this.props.project.toLowerCase()

    const bgClasses = `project_bg ${project}_bg`
    const flatBgClasses = `project_flat_bg ${project}_flat_bg`
    const projectMainClasses = `project_main ${project}_main`
    const titleClasses = `project_title ${project}_title scroll_link`

    const title = {
      gallery: 'Gallery',
      pixel: 'Pixel Wall'
    }

    return (
      <div className="project">
        <div className={bgClasses}>
          <div className={flatBgClasses}></div>
        </div>

        <div className={projectMainClasses}>

          <div className={titleClasses}>
            <p>{title[project].toUpperCase()}</p>
          </div>

          <ScrollLink />

          <LandingImages project={project} />

        </div>
      </div>
    )
  }
}

Landing.propTypes = {
  project: PropTypes.string
}

export default Landing
