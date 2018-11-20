import React from 'react'

import './ScrollLink.scss'

class ScrollLink extends React.Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    if ('requestAnimationFrame' in window === false) {
      window.scroll(0, window.innerHeight / 2)
    } else {
      let startPos = window.pageYOffset
      let startTime = 'now' in window.performance ? window.performance.now() : new Date().getTime()
      let duration = 600

      function scroll () {
        let now = 'now' in window.performance ? window.performance.now() : new Date().getTime()
        let time = Math.min(1, ((now - startTime) / duration))

        window.scroll(
          0,
          Math.ceil(((time * (2 - time)) * ((window.innerHeight / 2) - startPos)) + startPos)
        )

        if (window.pageYOffset >= window.innerHeight / 2) { return }
        window.requestAnimationFrame(scroll)
      }

      scroll()
    }
  }

  render () {
    return (
      <div className="project_scroll_link" onClick={this.handleClick}>
        <div className="scroll_link">
          <h3>MORE</h3>
          <img width="48px" src="/img/landing/more_arrow.svg" alt="Read more" />
        </div>
      </div>
    )
  }
}

export default ScrollLink
