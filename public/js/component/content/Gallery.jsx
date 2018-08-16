import React from 'react'

function galleryImage () {
  return (
    <div className="project_img gallery_imgs">

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

export { galleryImage }
