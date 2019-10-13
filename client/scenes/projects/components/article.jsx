import React from 'react'
import PropTypes from 'prop-types'

import { galleryArticle } from './content/gallery.jsx'
import { pixelArticle } from './content/pixel.jsx'

import './article.scss'

class Article extends React.Component {
  render () {
    const project = this.props.project.toLowerCase()
    let articles = { gallery: galleryArticle, pixel: pixelArticle }

    return (
      <section className="proj_article">
        {articles[project]()}
      </section>
    )
  }
}

Article.propTypes = { project: PropTypes.string }

export default Article
