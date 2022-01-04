import React from 'react'
import PropTypes from 'prop-types'

import { galleryImage } from './gallery.jsx'
import { acrossImage } from './across.jsx'
import { pixelImage } from './pixel.jsx'
import EventHandler from '../../../components/eventHandler/eventHandler.jsx'

class LandingImages extends React.Component {
  constructor (props) {
    super(props)

    this.state = { fixed: true }

    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll (e) {
    const passedThreshold = window.pageYOffset - window.innerHeight / 2 > 0

    if (passedThreshold && this.state.fixed === true) {
      this.setState({ fixed: false })
    } else if (!passedThreshold && this.state.fixed === false) {
      this.setState({ fixed: true })
    }
  }

  render () {
    const project = this.props.project.toLowerCase()

    let imgs = { gallery: galleryImage, across: acrossImage, pixel: pixelImage }

    return (
      <EventHandler onScroll={this.handleScroll}>
        <div onClick={this.props.handleScrollClick}>
          {imgs[project](this.state.fixed)}
        </div>
      </EventHandler>
    )
  }
}

LandingImages.propTypes = {
  project: PropTypes.string,
  handleScrollClick: PropTypes.func
}

export default LandingImages
