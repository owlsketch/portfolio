import React from 'react'
import ScrollLink from './ScrollLink'
import DisplayImgs from './DisplayImgs'

import './ProjectDisplay.scss'

function ProjectDisplay () {
  return (
    <div className="project">

      <div className="project_bg gallery_bg">
        <div className="project_flat_bg gallery_flat_bg"></div>
      </div>

      <div className="project_main gallery_main">

        <div className="project_title gallery_title scroll_link">
          <p>GALLERY</p>
        </div>

        <ScrollLink />
        <DisplayImgs />

      </div>

    </div>
  )
}

export default ProjectDisplay
