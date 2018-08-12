import React from 'react'
import Arrow from './Arrow'

import './ProjectNav.scss'

function ProjectNav () {
  return (
    <div className="proj_nav_layer">
      <div className="proj_arrows">
        <Arrow direction="left"/>
        <Arrow direction="right"/>
      </div>
    </div>
  )
}

export default ProjectNav
