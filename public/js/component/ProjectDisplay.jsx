import React from 'react'
import ScrollLink from './ScrollLink'
import DisplayImgs from './DisplayImgs'

import './ProjectDisplay.scss'

function ProjectDisplay () {
  return (
    <div className="project"> 

      <div className="project_bg pixel_bg">
        <div className="project_flat_bg pixel_flat_bg"></div>
      </div>

      <div className="project_main pixel_main"> 

        <div className="project_title pixel_title scroll_link">
          <p>PIXEL WALL</p>
        </div>

        <ScrollLink />
        <DisplayImgs />

      </div>

    </div>
  )
}

export default ProjectDisplay
