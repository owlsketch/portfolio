import React from 'react'
import PropTypes from 'prop-types'

import { galleryImage } from './Gallery'
import { pixelImage } from './Pixel'

import EventHandler from '../EventHandler'

import './LandingImages.scss'

class LandingImages extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      fixed: true
    }

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

    let imgs = {
      gallery: galleryImage,
      pixel: pixelImage
    }

    return (
      <EventHandler onScroll={this.handleScroll}>
        {imgs[project](this.state.fixed)}
      </EventHandler>
    )
  }
}

LandingImages.propTypes = {
  project: PropTypes.string
}

export default LandingImages
