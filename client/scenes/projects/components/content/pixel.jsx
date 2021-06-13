import React from 'react'

import '../article.scss'
import './pixel.scss'

function pixelImage (fixed) {
  let imgClasses = `project_img pixel_imgs`
  if (!fixed) imgClasses += ` project_img_absolute`

  return (
    <div className={imgClasses}>
      <img className="img_pixel_wall" width="525px" src="/assets/img/landing/pixel/pixelwall.png"/>
    </div>
  )
}

function pixelArticle () {
  return (
    <div className="pixel_article">
      <h2 className="article_title">Interactive ‘Internet Of Things’ LEDs</h2>
      <article className="article_content">
        <p>
          <a href="https://github.com/owlsketch/pixelwall">Pixel Wall</a> is an interactive LED grid controlled via the internet! It was designed for GRID so that visitors may feel welcome to a space that both promotes participation with technology and provides resources for others to learn and create.
        </p>

        <div className="pixel_img_flex">
          <div className="pixel_img_container">
            <img width="256px" src="/assets/img/article/pixel/articleImg1.jpg"/>
            <p className="subtext">
              Rika with the pixel wall.
            </p>
          </div>

          <div className="pixel_img_container">
            <img width="256px" src="/assets/img/article/pixel/articleImg2.jpg"/>
            <p className="subtext">
              A student playing with the pixel wall.
            </p>
          </div>

          <div className="pixel_img_container">
            <img width="256px" src="/assets/img/article/pixel/articleImg3.jpg"/>
            <p className="subtext">
              Mozilla&#39;s IoT team at MakerFaire 2018.
            </p>
          </div>
        </div>

        <p>
          The website was designed with a mobile-first approach. The experience we wanted visitors to have was one where they can instantly control an element in their environment from their phones.
        </p>

        <p className="article_quote">
          The experience we wanted visitors to have was one where they can instantly control an element in their environment from their phones.
        </p>

        <div className="pixel_interface_container">
          <div className="pixel_interface_flex">
            <div className="pixel_interface_img">
              <img width="128px" src="/assets/img/article/pixel/mobPortrait1.png"/>
            </div>
            <div className="pixel_interface_img">
              <img width="128px" src="/assets/img/article/pixel/mobPortrait2.png"/>
            </div>
          </div>
          <p className="subtext">
            Drawings made on the mobile site.
          </p>
        </div>

        <p>
          By the end of my contract with GRID we managed to create a handful of prototypes, one of which was <a href="https://twitter.com/frashed/status/997991289764298752">featured by Mozilla&#39;s Internet Of Things team at MakerFaire in California</a>. Before leaving, we also managed to constuct a pixel wall with a total of 2,700 LEDs, with help from a <a href="https://makezine.com/projects/construct-giant-led-video-screen/">Make article</a>.
        </p>

        <p>
          After having graduated from University, this was my first &#39;real&#39; project. It was my first opportunity to prove that I really had the skills to create with what I had been learning over the years. Nevertheless, I couldn’t have managed to pursue this project without the help from my friends at GRID. This project also helped show me the direction I need to be heading towards in my career.
        </p>

        <p>
          I hope to one day be able to visit this project again. I accomplished many of the technical goals that were set out for me, however I believe there were other shortcomings. A greater effort could have been made to entice people into making their own pixel walls. Another shortcoming was the lack of a formal set of instructions for creating a pixel wall. In particular, the assembly of the container, which I had very little knowledge on how to approach myself.
        </p>

        <p>
          Hopefully one day I can build upon what is already in place and create a truly open source device that also succeeds in allowing makers to create their own devices and to learn along the journey. Regardless, I&#39;m proud of having built a device that entertained lots of people and had them interested in how I made it happen.
        </p>
        <img className="endmark" width="48px" src="/assets/img/article/owlsketchBlack.png"/>
      </article>
    </div>
  )
}

export { pixelImage, pixelArticle }
