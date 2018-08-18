import React from 'react'

function galleryImage (fixed) {
  let imgClasses =  `project_img `
  if (!fixed) imgClasses += ` project_img_absolute`
  
  return (
    <div className={imgClasses}>

      <div className="layer gallery_layer_bottom">
        <div className="gallery_portrait">
          <img className="img_gallery_landscape scroll_link" src="/img/landing/gallery/landscape_left.jpg" width="288px" alt="Claude Monet landscape painting"/>
        </div>
        <div className="gallery_portrait">
          <img className="img_gallery_landscape scroll_link" src="/img/landing/gallery/portrait_left.jpg" width="288px" alt="Claude Monet portrait painting"/>
        </div>
      </div>

      <div className="layer gallery_layer_middle">
        <div className="gallery_portrait">
          <img className="img_gallery_portrait scroll_link" src="/img/landing/gallery/portrait_right.jpg" width="172px" alt="Gallery main menu modal"/>
        </div>
        <div className="gallery_portrait">
          <img className="img_gallery_portrait scroll_link" src="/img/landing/gallery/landscape_right.jpg" width="172px" alt="Claude Monet portrait painting"/>
        </div>
      </div>

      <div className="layer gallery_layer_top">
        <div className="gallery_modal">
          <img className="img_gallery_modal scroll_link" src="/img/landing/gallery/gallery_modal.png" width="272px" alt="Claude Monet landscape painting"/>
        </div>
      </div>

    </div>
  )
}

function galleryArticle () {
  return (
    <div className="proj_article">

      <div className="proj_description">
        <p>
          Gallery is an interactive 3D art gallery on the web.
          Its goal is to allow visitors to experience art on the internet in an
          immersive and approachable manner without the need of expensive VR equipment.
        </p>
      </div>
      <div className="proj_links">
        <a href="https://owlsketch.com/gallery">Visit Gallery</a>
        <a href="https://github.com/owlsketch/gallery">View Code</a>
      </div>
      <div className="gallery_article_image">
        <img className="gallery_img_claude_angle" width="1000px" src="/img/article/gallery/ClaudeAngle.jpg" alt="Claude Monet Gallery main presentation"/>
      </div>
      <div className="gallery_article_image">
        <div className="gallery_img_flex">
          <img width="460px" src="/img/article/gallery/ClaudeGroup.jpg" alt="Claude Monet Group of Artwork"/>
          <img width="460px" src="/img/article/gallery/ClaudeTitle.jpg" alt="Claude Monet Gallery main menu"/>
        </div>
      </div>

    </div>
  )
}

export { galleryImage, galleryArticle }
