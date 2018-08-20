import React from 'react'

import PropTypes from 'prop-types'

// via composition handle listener for children props
class EventHandler extends React.Component {
  constructor (props) {
    super(props)

    this.handleEvent = this.handleEvent.bind(this)
  }

  handleEvent (e) {
    if (this.props.onKeyPress) this.props.onKeyPress(e)
    if (this.props.onScroll) this.props.onScroll(e)
  }

  componentDidMount () {
    if (this.props.onKeyPress) window.addEventListener('keydown', this.handleEvent)
    if (this.props.onScroll) window.addEventListener('scroll', this.handleEvent)
  }

  componentWillUnmount () {
    if (this.props.onKeyPress) window.removeEventListener('keydown', this.handleEvent)
    if (this.props.onScroll) window.removeEventListener('scroll', this.handleEvent)
  }

  render () {
    return this.props.children
  }
}

EventHandler.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  onKeyPress: PropTypes.func,
  onScroll: PropTypes.func
}

export default EventHandler
