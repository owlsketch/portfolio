import { galleryImage } from './Gallery'
import { pixelImage } from './Pixel'

import './LandingImages.scss'

function LandingImages (props) {
  const project = props.project.toLowerCase()

  let imgs = {
    gallery: galleryImage,
    pixel: pixelImage
  }

  return (imgs[project]())
}

export default LandingImages
