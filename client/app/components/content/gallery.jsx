import React from 'react'

import '../article.scss'
import './gallery.scss'

function galleryImage (fixed) {
  let imgClasses = `project_img `
  if (!fixed) imgClasses += ` project_img_absolute`

  return (
    <div className={imgClasses}>

      <div className='layer gallery_layer_bottom'>
        <div className='gallery_portrait'>
          <img className='img_gallery_landscape scroll_link' src='/assets/img/landing/gallery/landscapeLeft.jpg' width='288px'/>
        </div>
        <div className='gallery_portrait'>
          <img className='img_gallery_landscape scroll_link' src='/assets/img/landing/gallery/landscapeRight.jpg' width='288px'/>
        </div>
      </div>

      <div className='layer gallery_layer_middle'>
        <div className='gallery_portrait'>
          <img className='img_gallery_portrait scroll_link' src='/assets/img/landing/gallery/portraitLeft.jpg' width='172px'/>
        </div>
        <div className='gallery_portrait'>
          <img className='img_gallery_portrait scroll_link' src='/assets/img/landing/gallery/portraitRight.jpg' width='172px'/>
        </div>
      </div>

      <div className='layer gallery_layer_top'>
        <div className='gallery_modal'>
          <img className='img_gallery_modal scroll_link' src='/assets/img/landing/gallery/galleryModal.jpg' width='240px'/>
        </div>
      </div>

    </div>
  )
}

function galleryArticle () {
  return (
    <div className='gallery_article'>
      <h2 className='article_title'>Immersive Art Galleries for the Web</h2>
      <article className='article_content'>
        <p>
          <a href='https://www.laika.gallery'>Laika Gallery</a> is a website that allows artists to create 3D art exhibitions in order to promote and sell their artwork online. It&apos;s available for both mobile and desktop and doesn&apos;t require a third-party plug-in to function.
        </p>

        <div className='article_img'>
          <img src='/assets/img/article/gallery/articleImg2.jpg'/>
          <p className='subtext'>
            A gallery made using Laika Gallery.
          </p>
        </div>

        <p>
          The project began thanks to the Metropolitan Museum&#39;s <a href='https://metmuseum.org/blogs/digital-underground/2017/open-access-at-the-met'>Open Access Initiative</a>, a project publishing the museum&#39;s collection of public-domain artworks online. The project makes artwork available to the public, however, it fails to be as consumable as an actual visit to the museum which is where Laika Gallery steps in.
        </p>

        <p className='article_quote'>
          [An] experience involving the interaction between the pieces, their arrangement, and the space.
        </p>

        <p>
          From there, the project was repurposed to showcase anyone&apos;s artwork.  By transforming this project into a tool that could be used by any artist to create an immersive and interactive experience on the web, the concept of accessibility came to the forefront of our development. The aim was to create a tool that makes gallery creation accessible to artists while minimizing the technical cost to the viewer.
        </p>

        <div className='article_img'>
          <img src='/assets/img/article/gallery/articleImg1.jpg'/>
          <p className='subtext'>
            Easy management of all your works through the user page.
          </p>
        </div>

        <p>
          To make this a reality meant consciously working well within the bounds of <a href='https://www.forbes.com/sites/davidthier/2018/02/05/the-nintendo-switchs-secret-is-that-its-already-obsolete/#e5e745539136'>obsolete hardware just like the Nintendo Switch managed to accomplish</a>. Laika Gallery can&#39;t promise hyper-realistic content, but by decoupling the product from bleeding-edge technology, what can be delivered is access for a wider audience. By not defaulting towards Unity, as many competitors have done, and using Three.js instead, the technical cost is greatly reduced, thus increasing accessibility.
        </p>

        <div className='article_img'>
          <img src='/assets/img/article/gallery/articleImg3.jpg'/>
          <p className='subtext'>
            A seamless editor that works on both mobile and desktop.
          </p>
        </div>

        <img className='endmark' width='48px' src='/assets/img/article/owlsketchBlack.png'/>
      </article>
    </div>
  )
}

export { galleryImage, galleryArticle }
