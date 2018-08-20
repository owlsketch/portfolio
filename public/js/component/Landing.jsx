import React from 'react'
import PropTypes from 'prop-types'

import ScrollLink from './navigation/ScrollLink'
import LandingImages from './content/LandingImages'

import EventHandler from './EventHandler'

import './Landing.scss'

class Landing extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      titleStyle: {
        opacity: 1
      },
      scrolled: false
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll (e) {
    let opacityVal = 1

    let quarterPos = window.innerHeight / 4
    let initialRange = window.pageYOffset / quarterPos
    let secondRange = (window.pageYOffset - quarterPos) / (window.innerHeight / 2 - quarterPos)

    if (initialRange < 1) {
      opacityVal = 1 - initialRange
    } else if (initialRange >= 1 && secondRange < 1) {
      opacityVal = 0 + secondRange
    }

    this.setState({
      titleStyle: {
        opacity: opacityVal
      }
    })

    if (initialRange >= 1 && this.state.scrolled === false) {
      this.setState({ scrolled: true })
    } else if (initialRange < 1 && this.state.scrolled === true) {
      this.setState({ scrolled: false })
    }
  }

  render () {
    const project = this.props.project.toLowerCase()

    const bgClasses = `project_bg ${project}_bg`
    const flatBgClasses = `project_flat_bg ${project}_flat_bg`
    const projectMainClasses = `project_main ${project}_main`
    let titleClasses = `project_title ${project}_title scroll_link`

    if (this.state.scrolled) {
      titleClasses += ` project_title_scrolled ${project}_title_scrolled`
    }

    const title = {
      gallery: 'Gallery',
      pixel: 'Pixel Wall'
    }

    return (
      <EventHandler onScroll={this.handleScroll}>
        <div className="project">
          <div className={bgClasses}>
            <div className={flatBgClasses}></div>
          </div>

          <div className={projectMainClasses}>

            <div className={titleClasses} style={this.state.titleStyle}>
              <p>{title[project].toUpperCase()}</p>
            </div>

            <ScrollLink />

            <LandingImages project={project} />

          </div>
        </div>
      </EventHandler>
    )
  }
}

Landing.propTypes = {
  project: PropTypes.string
}

export default Landing
