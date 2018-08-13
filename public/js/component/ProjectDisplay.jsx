import React from 'react'
import PropTypes from 'prop-types'
import ScrollLink from './ScrollLink'
import DisplayImgs from './DisplayImgs'

import './ProjectDisplay.scss'

class ProjectDisplay extends React.Component {
  render () {
    const bgClasses = `project_bg ${this.props.projectName}_bg`
    const flatBgClasses = `project_flat_bg ${this.props.projectName}_flat_bg`
    const projectMainClasses = `project_main ${this.props.projectName}_main`
    const titleClasses = `project_title ${this.props.projectName}_title scroll_link`

    return (
      <div className="project">

        <div className={bgClasses}>
          <div className={flatBgClasses}></div>
        </div>

        <div className={projectMainClasses}>

          <div className={titleClasses}>
            <p>{this.props.projectName.toUpperCase()}</p>
          </div>

          <ScrollLink />
          <DisplayImgs />

        </div>

      </div>
    )
  }
}

ProjectDisplay.propTypes = {
  projectName: PropTypes.string
}

export default ProjectDisplay
