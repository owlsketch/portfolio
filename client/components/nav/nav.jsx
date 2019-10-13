import React from 'react'
import PropTypes from 'prop-types'

import './nav.scss'

class Nav extends React.Component {
  render () {
    return (
      <div className={this.props.separate ? 'nav_layer separate' : 'nav_layer'} id="nav_layer">
        <div className="logo">
          <a href="/">
            <div className="logo_wrapper" id="logo_wrapper">
              <p className="logo_text">OWLSKETCH</p>
            </div>
          </a>
        </div>
        <div className="menu">
          <a className="menu_link" href="/">projects</a>
          <a className="menu_link" href="/about">about</a>
        </div>
      </div>
    )
  }
}

Nav.propTypes = { separate: PropTypes.bool }

export default Nav
