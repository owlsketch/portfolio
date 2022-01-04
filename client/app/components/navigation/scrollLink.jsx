import React from 'react'
import PropTypes from 'prop-types'

import './scrollLink.scss'

class ScrollLink extends React.Component {
  render () {
    return (
      <div className='project_scroll_link' onClick={this.props.handleScrollClick}>
        <div className='scroll_link'>
          <h3>Más!</h3>
          <img width='48px' src='/assets/img/landing/moreArrow.svg' alt='Read more' />
        </div>
      </div>
    )
  }
}

ScrollLink.propTypes = { handleScrollClick: PropTypes.func }

export default ScrollLink
