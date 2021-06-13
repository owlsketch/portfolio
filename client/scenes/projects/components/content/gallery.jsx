import React from 'react'

import '../article.scss'
import './gallery.scss'

function galleryImage (fixed) {
  let imgClasses = `project_img `
  if (!fixed) imgClasses += ` project_img_absolute`

  return (
    <div className={imgClasses}>

      <div className="layer gallery_layer_bottom">
        <div className="gallery_portrait">
          <img className="img_gallery_landscape scroll_link" src="/assets/img/landing/gallery/landscapeLeft.jpg" width="288px"/>
        </div>
        <div className="gallery_portrait">
          <img className="img_gallery_landscape scroll_link" src="/assets/img/landing/gallery/landscapeRight.jpg" width="288px"/>
        </div>
      </div>

      <div className="layer gallery_layer_middle">
        <div className="gallery_portrait">
          <img className="img_gallery_portrait scroll_link" src="/assets/img/landing/gallery/portraitLeft.jpg" width="172px"/>
        </div>
        <div className="gallery_portrait">
          <img className="img_gallery_portrait scroll_link" src="/assets/img/landing/gallery/portraitRight.jpg" width="172px"/>
        </div>
      </div>

      <div className="layer gallery_layer_top">
        <div className="gallery_modal">
          <img className="img_gallery_modal scroll_link" src="/assets/img/landing/gallery/galleryModal.jpg" width="240px"/>
        </div>
      </div>

    </div>
  )
}

function galleryArticle () {
  return (
    <div className="gallery_article">
      <h2 className="article_title">Immersive Art Galleries for the Web</h2>
      <article className="article_content">
        <p>
          <a href="https://www.laika.gallery">Laika Gallery</a> is an effort to bring the experience of art galleries to the web. At its core also lies the concept of accessibility.
        </p>
        <p>
          The project began thanks to the Metropolitan Museum&#39;s <a href="https://metmuseum.org/blogs/digital-underground/2017/open-access-at-the-met">Open Access Initiative</a>, a project publishing the museum&#39;s collection of public-domain artworks online. The project makes artwork available to the public, however, it fails to be as consumable as an actual visit to the museum.
        </p>

        <div className="article_img">
          <img src="/assets/img/article/gallery/articleImg1.jpg"/>
          <p className="subtext">
            Results from exploring the Met’s Open Access Initiative.
          </p>
        </div>

        <p>
          Going to a museum is a curated experience involving the interaction between the pieces, their arrangement, and the space. First impressions are about the gallery as a whole, something that is lost when using the internet as a medium. Pieces are isolated and their sense of scale is lost. Their arrangement isn&#39;t curated but programatically preconfigured. The space is reduced to a two-dimmensional plane.
        </p>

        <p className="article_quote">
          [An] experience involving the interaction between the pieces, their arrangement, and the space.
        </p>

        <p>
          As a response to these issues, a prototype of Laika Gallery was created in 2014. The first version was also for my grandmother; I wanted to be able to bring the museum to her since it was difficult for us to travel to the Met.
        </p>

        <div className="article_img">
          <img src="/assets/img/article/gallery/articleImg2.jpg"/>
          <p className="subtext">
            A preview from the first version of Laika Gallery.
          </p>
        </div>

        <p>
          This project originally intended to make the Met&#39;s Open Collection more accessible online. However, I received a few messages online from artists over the years thanking me for the code I had written, as they had repurposed the code to showcase their own artwork. I realized that the concept of accessibility could be further developed to transform this project into a tool that could be used by any artist to create an immersive and interactive experience on the web.
        </p>

        <p>
          Another cause for developing Laika Gallery further was a demo I tried out for a <a href="https://www.engadget.com/2017/08/02/smithsonian-art-museum-intel-vr/">VR museum experience by the Smithsonian</a>. The experience was just like being at the museum itself! Yet, with accessibility in mind, what I tried out had no real or significant audience. The cost of running the application involved a VR headset and a computer strong enough to render the experience. It was developed with a unique rig by Intel running the latest specs and in that process it was forgotten that the average user doesn&#39;t have anything near comparable to that. Likewise, similar projects that already exist on the web run into similar problems by relying on Unity and thus reducing their accessibility. In these scenarios, the technical cost of the application becomes a burden on the user that results in turning many away.
        </p>

        <div className="article_img">
          <img src="/assets/img/article/gallery/articleImg3.jpg"/>
          <p className="subtext">
            We began developing the newest version of Laika Gallery in July 2018.
          </p>
        </div>

        <p>
          So I decided to work on Laika Gallery once again with accessibility still in mind. I&#39;m aiming to create a tool that makes gallery creation accessible to artists while minimizing the technical cost to the viewer. To make this a reality means consciously working well within the bounds of <a href="https://www.forbes.com/sites/davidthier/2018/02/05/the-nintendo-switchs-secret-is-that-its-already-obsolete/#e5e745539136">obsolete hardware just like the Nintendo Switch managed to accomplish</a>. Laika Gallery can&#39;t promise hyper-realistic content, but by decoupling the product from bleeding-edge technology, what can be delivered is access for a wider audience. By not defaulting towards Unity, as many competitors have done, and using Three.js instead, the technical cost for users is greatly reduced, thus increasing accessibility. This does come at the cost of prolonged development time, however I don&#39;t see this as a setback, but as a necessity to getting it done right.
        </p>

        <p>
          With all of this in mind, I&#39;m hoping to have the first release happen in July 2021!
        </p>
        <img className="endmark" width="48px" src="/assets/img/article/owlsketchBlack.png"/>
      </article>
    </div>
  )
}

export { galleryImage, galleryArticle }
