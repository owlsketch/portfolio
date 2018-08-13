import React from 'react'
import PropTypes from 'prop-types'

import './Arrow.scss'

class Arrow extends React.Component {
  render () {
    const classes = `arrow ${this.props.direction}_arrow`
    const altText = `${this.props.direction} arrow`

    return (
      <img width="46px" className={classes} src="/img/landing/arrow.svg" alt={altText} />
    )
  }
}

Arrow.defaultProps = {
  direction: 'left'
}

Arrow.propTypes = {
  direction: PropTypes.string
}

export default Arrow
