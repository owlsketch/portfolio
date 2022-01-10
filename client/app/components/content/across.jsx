import React from 'react'

import '../article.scss'
import './across.scss'

function acrossImage (fixed) {
  let imgClasses = `project_img across_imgs`
  if (!fixed) imgClasses += ` project_img_absolute`

  return (
    <div className={imgClasses}>
      <img className='img_across scroll_link' width='525px' src='/assets/img/landing/across/cotopaxi.png'/>
    </div>
  )
}

function acrossArticle () {
  return (
    <div className='across_article'>
      <h2 className='article_title'>A VR Narrative on Immigrant Dreams</h2>
      <article className='article_content'>
        <p>
          Across la Tierra is an interactive virtual reality experience that mixes 3D environments, 360° video, interviews and original music in order to create an immersive environment for the viewer to explore. It was directed and produced by Layqa Nuna Yawar, produced and programmed by Gibran Garcia, with an original score by Yeimy Gamez Castillo.
        </p>

        <div className='article_video across_videoContainer'>
          <iframe
            className='across_video'
            src="https://player.vimeo.com/video/465998862?h=d99eb95de2&autoplay=1&portrait=0&muted=1"
            width="576"
            height="324"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>

        <p>
          Objects found along this journey are interactive and can be picked up. When held, these objects trigger 360° video interviews and landscape captures that start to weave multiple narratives together. A framed picture of the artist’s grandmother takes you to a cemetery in Ecuador to visit her grave. Some are memories of the artist’s own family history, while other objects tell somebody else’s immigrant story, perspective or dreams.
        </p>

        <div className='article_video across_float'>
          <video autoPlay loop className='across_video'>
            <source type='video/webm' src='/assets/img/article/across/articleVideo1.webm'/>
          </video>
        </div>

        <p>
          It was funded by an Open Society Foundation Fellowship and was based on a personal investigation of the artist&apos;s family migration history. This project takes place between Ecuador in South America, New York City in North America and is connected by a virtual space and the space between continents and immigrant dreams.
        </p>

        <p>
          Keeping in mind that new technologies are often not accessible to communities of color and migrant populations, Across la Tierra aims to bridge mural making and emergent digital technologies by becoming an experiment in storytelling and community engaged practices.
        </p>

        <div className='article_img across_flyer'>
          <img src='/assets/img/article/across/articleImg1.jpg'/>
          <p className='subtext'>
            Flyer for first public viewing at the Newark Arts Festival.
          </p>
        </div>

        <img className='endmark' width='48px' src='/assets/img/article/owlsketchBlack.png'/>
      </article>
    </div>
  )
}

export { acrossImage, acrossArticle }
