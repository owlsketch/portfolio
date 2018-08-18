import React from 'react'

import PropTypes from 'prop-types'

//via composition handle listener for children props
class EventHandler extends React.Component {
  constructor (props) {
    super(props)

    this.handleKey = this.handleKey.bind(this)
  }

  handleKey (e) {
    if (this.props.onKeyPress) this.props.onKeyPress(e)
  }

  componentDidMount () {
    if (this.props.onKeyPress) window.addEventListener('keydown', this.handleKey)
  }

  componentWillUnmount () {
    if (this.props.onKeyPress) window.removeEventListener('keydown', this.handleKey)
  }

  render () {
    return this.props.children
  } 
}

EventHandler.propTypes = {
  onKeyPress: PropTypes.func
}

export default EventHandler
