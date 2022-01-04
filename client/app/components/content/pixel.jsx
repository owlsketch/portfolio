import React from 'react'

import '../article.scss'
import './pixel.scss'

function pixelImage (fixed) {
  let imgClasses = `project_img pixel_imgs`
  if (!fixed) imgClasses += ` project_img_absolute`

  return (
    <div className={imgClasses}>
      <img className='img_pixel_wall scroll_link' width='525px' src='/assets/img/landing/pixel/pixelwall.png'/>
    </div>
  )
}

function pixelArticle () {
  return (
    <div className='pixel_article'>
      <h2 className='article_title'>Interactive ‘Internet Of Things’ LEDs</h2>
      <article className='article_content'>
        <p>
          <a href='https://github.com/owlsketch/pixelwall'>Pixel Wall</a> is an interactive LED grid controlled via the internet! It was designed for GRID so that visitors may feel welcome to a space that both promotes participation with technology and provides resources for others to learn and create.
        </p>

        <div className='pixel_img_flex'>
          <div className='pixel_img_container'>
            <img width='256px' src='/assets/img/article/pixel/articleImg1.jpg'/>
            <p className='subtext'>
              Rika with the pixel wall.
            </p>
          </div>

          <div className='pixel_img_container'>
            <img width='256px' src='/assets/img/article/pixel/articleImg2.jpg'/>
            <p className='subtext'>
              A student playing with the pixel wall.
            </p>
          </div>

          <div className='pixel_img_container'>
            <img width='256px' src='/assets/img/article/pixel/articleImg3.jpg'/>
            <p className='subtext'>
              Mozilla&#39;s IoT team at MakerFaire 2018.
            </p>
          </div>
        </div>

        <p>
          The website was designed with a mobile-first approach. The experience we wanted visitors to have was one where they can instantly control an element in their environment from their phones.
        </p>

        <p className='article_quote'>
          The experience we wanted visitors to have was one where they can instantly control an element in their environment from their phones.
        </p>

        <div className='pixel_interface_container'>
          <div className='pixel_interface_flex'>
            <div className='pixel_interface_img'>
              <img width='128px' src='/assets/img/article/pixel/mobPortrait1.png'/>
            </div>
            <div className='pixel_interface_img'>
              <img width='128px' src='/assets/img/article/pixel/mobPortrait2.png'/>
            </div>
          </div>
          <p className='subtext'>
            Drawings made on the mobile site.
          </p>
        </div>

        <p>
          Working alongside GRID, we managed to create a handful of prototypes, one of which was <a href='https://twitter.com/frashed/status/997991289764298752'>featured by Mozilla&#39;s Internet Of Things team at MakerFaire in California</a>. By the end, we also managed to build a pixel wall with a total of 2,700 LEDs, with help from a <a href='https://makezine.com/projects/construct-giant-led-video-screen/'>Make article</a>.
        </p>

        <p>
          By using <a href='https://socket.io/'>socket.io</a>, the pixel wall is able to receive input from multiple users at the same time! This meant more than one person could draw on the pixel wall and allowed for a collaborative effort. To further promote collaboration, this project was made <a href='https://github.com/owlsketch/pixelwall'>publicly available</a> in order to allow anyone to access the code and create their own pixel walls!
        </p>

        <img className='endmark' width='48px' src='/assets/img/article/owlsketchBlack.png'/>
      </article>
    </div>
  )
}

export { pixelImage, pixelArticle }
