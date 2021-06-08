import React from 'react'
import PropTypes from 'prop-types'

import './nav.scss'

class Nav extends React.Component {
  render () {
    return (
      <div className={this.props.separate ? 'nav_layer separate' : 'nav_layer'} id="nav_layer">
        <div className="logo">
          <a href="/">
            <img src='/assets/img/logo.png' width="150"/>
          </a>
        </div>
        <div className="menu">
          <a href="/">projects</a>
          <a href="/about">about</a>
        </div>
      </div>
    )
  }
}

Nav.propTypes = { separate: PropTypes.bool }

export default Nav
