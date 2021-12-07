import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './nav.scss'

class Nav extends React.Component {
  render () {
    return (
      <div className={this.props.separate ? 'nav_layer separate' : 'nav_layer'} id='nav_layer'>
        <div className='logo'>
          <Link to='/projects/gallery'>
            <img src='/assets/img/logo.png' width='150'/>
          </Link>
        </div>
        <div className='menu'>
          <Link to='/projects/gallery'>projects</Link>
          <Link to='/about'>about</Link>
        </div>
      </div>
    )
  }
}

Nav.propTypes = { separate: PropTypes.bool }

export default Nav
