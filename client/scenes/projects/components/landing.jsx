import React from 'react'
import PropTypes from 'prop-types'

import ScrollLink from './navigation/scrollLink.jsx'
import LandingImages from './content/landingImages.jsx'
import EventHandler from '../../../components/eventHandler/eventHandler.jsx'

import './landing.scss'

class Landing extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      titleStyle: {
        opacity: 1
      },
      bgStyle: {
        opacity: 0
      },
      scrolled: false
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll (e) {
    let titleOpacity = 1
    let bgOpacity = 0

    let quarterPos = window.innerHeight / 4
    let halfPos = window.innerHeight / 2

    // from beginning of page to 1/4 of the page scroll
    let initialRange = window.pageYOffset / quarterPos
    // from a 1/4 of the page scroll to 1/2
    let secondRange = (window.pageYOffset - quarterPos) / (window.innerHeight / 2 - quarterPos)
    // from beginning of page to 1/2 of the page
    let finalRange = window.pageYOffset / halfPos

    if (initialRange < 1) {
      titleOpacity = 1 - initialRange
    } else if (initialRange >= 1 && secondRange < 1) {
      titleOpacity = 0 + secondRange
    }

    if (finalRange < 1) {
      bgOpacity = 0 + finalRange
    } else {
      bgOpacity = 1
    }

    this.setState({
      titleStyle: {
        opacity: titleOpacity
      },
      bgStyle: {
        opacity: bgOpacity
      }
    })

    // trigger scrolled text styling if passed 1/4 range
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
      <section className="landing">
        <EventHandler onScroll={this.handleScroll}>
          <div className="project">
            <div className={bgClasses}>
              <div className={flatBgClasses} style={this.state.bgStyle}></div>
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
      </section>
    )
  }
}

Landing.propTypes = { project: PropTypes.string }

export default Landing
