import React from 'react'

function galleryImage (fixed) {
  let imgClasses = `project_img `
  if (!fixed) imgClasses += ` project_img_absolute`

  return (
    <div className={imgClasses}>

      <div className="layer gallery_layer_bottom">
        <div className="gallery_portrait">
          <img className="img_gallery_landscape scroll_link" src="/img/landing/gallery/landscape_left.jpg" width="288px"/>
        </div>
        <div className="gallery_portrait">
          <img className="img_gallery_landscape scroll_link" src="/img/landing/gallery/portrait_left.jpg" width="288px"/>
        </div>
      </div>

      <div className="layer gallery_layer_middle">
        <div className="gallery_portrait">
          <img className="img_gallery_portrait scroll_link" src="/img/landing/gallery/portrait_right.jpg" width="172px"/>
        </div>
        <div className="gallery_portrait">
          <img className="img_gallery_portrait scroll_link" src="/img/landing/gallery/landscape_right.jpg" width="172px"/>
        </div>
      </div>

      <div className="layer gallery_layer_top">
        <div className="gallery_modal">
          <img className="img_gallery_modal scroll_link" src="/img/landing/gallery/gallery_modal.png" width="272px"/>
        </div>
      </div>

    </div>
  )
}

function galleryArticle () {
  return (
    <div className="gallery_article">

      <div className="proj_links">
        <a href="https://owlsketch.com/gallery">Visit Gallery</a>
        <a href="https://github.com/owlsketch/gallery">View Code</a>
      </div>

      <h2 className="article_title">Immersive Art Galleries for the Web</h2>
      <article className="article_content">
        <p>
          Laika Gallery, as the name hints at, is an effort to bring the experience of art galleries to the web. Fundamentally, at its core also lies the concept of accessibility.
        </p>
        <p>
          The project began after I read about the Metropolitan Museum's Open Access Initiative, an effort to publish the museum's collection of public-domain artworks online. The Met's efforts succeeded in making information available to the public. However, they failed to make it as consumable as an actual visit to a museum. 
        </p>

        <div className="article_img">
          <img src="/img/article/gallery/article_img_1.JPG"/>
          <p className="subtext">
            Results from exploring the Met’s Open Access Initiative.
          </p>
        </div>

        <p>
          When you go to a museum, the experience is a curated one. The interaction between the space, the arrangement, and the pieces conveys a unique experience. As the visitor, your first impression is the gallery as a whole. Unfortunately, that interaction gets lost on the internet. The space is reduced to a two-dimmensional plane, losing its depth. The arrangement becomes a pre-configured list designed to handle an infinite amount of pieces, but without a single afterthought on the possible associations amongst them. The pieces themselves become isolated and lose their sense of scale.
        </p>

        <p className="article_quote">
          The interaction between the space, the arrangement, and the pieces conveys a unique experience. 
        </p>
  
        <p>
          As a response to these problems, I created the first working version of Laika Gallery in 2014. The goal was to bring all that lost information back, or at least as much as I could get away with. The first version was also for my grandmother; I wanted to be able to bring the museum to her since it proved difficult to do the contrary. With this having been accomplished, I shared the code on Github and went back to focusing on my studies.
        </p>
  
        <div className="article_img">
          <img src="/img/article/gallery/article_img_2.jpg"/>
          <p className="subtext">
            The main menu from the first version of Laika Gallery.
          </p>
        </div>

        <p>
          Years later a couple of events sparked my interest in this project again.
        </p>
        <p>
          I received a few messages online from artists thanking me for the code I had written, as they had repurposed the code to showcase their own artwork. This project originally had the purpose of making the Met's Open Collection more accessible and consumable online. However, these messages made me realize that the concept of accessibility could be further developed to transform this project into a tool that could be used by any artist to create an immersive and interactive experience on the web. 
        </p>

        <p>
          The other event that further inspired me was a demo I saw for a VR museum experience by the Smithsonian. It was beautifully rendered, and definitely something I couldn't compete with. Yet, with accessibility in mind, what I saw had no real audience. The cost of running the application involved a VR headset and a computer strong enough to render the view. It was developed with a unique rig by Intel running the latest specs and in the process it was forgotten that the average user doesn't have anything near comparable to that. Related projects that already exist on the web run into similar problems by relying on Unity and thus reducing their accessibility. In these scenarios, the technical cost of the application becomes a burden on the user that results in turning many away.
        </p>
        
        <div className="article_img">
          <img src="/img/article/gallery/article_img_3.jpg"/>
          <p className="subtext">
            We began developing the newest version of Laika Gallery in July 2018.
          </p>
        </div>

        <p>
          So I decided to work on Laika Gallery once again, this time as a collaborative effort, with accessibility still in mind. We're aiming to create a tool that makes gallery creation accessible to artists while minimizing the technical cost to visitors. To make this a reality means consciously working well within the bounds of obsolete hardware just like the Nintendo Switch managed to accomplish. Laika Gallery can't promise hyper-realistic content, but by decoupling the product from bleeding-edge technology, what can be promised is access for a wider audience. By not defaulting towards Unity, as many of our competitors have done, and working with Three.js instead, the technical cost for users is greatly reduced, thus increasing accessibility. This does come at the cost of prolonged development time, however I don't see this as a setback, but as a necessity to getting it done right. 
        </p>
        
        <p>
          With all of this in mind, we're hoping to have the first release happen in February 2019. 
        </p>
        <img className="endmark" width="48px" src="/img/article/owlsketch_black.png"/>
      </article>
    </div>
  )
}

export { galleryImage, galleryArticle }
