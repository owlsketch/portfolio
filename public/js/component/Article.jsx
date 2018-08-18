import { galleryArticle } from './content/Gallery'
import { pixelArticle } from './content/Pixel'

import './Article.scss'

function Article (props) {
  const project = props.project.toLowerCase()

  let articles = {
    gallery: galleryArticle,
    pixel: pixelArticle
  }

  return (articles[project]())
}

export default Article
