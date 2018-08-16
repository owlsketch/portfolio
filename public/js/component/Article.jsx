import React from 'react'

import './Article.scss'

/*
function ProjectArticle () {
  return (
    <div className="proj_article">

      <div className="proj_description">
        <p>
          Made for GRID, the Pixel Wall is an interactive LED Display designed
          to welcome students to a space that both promotes participation with
          technology and provides resources for students to learn and create.
        </p>
      </div>

      <div class="proj_links">
        <a href="https://owlsketch.com/pixel">Visit Pixel Wall</a>
        <a href="https://github.com/RutgersGRID/pixelwall">View Code</a>
      </div>
      <div class="pixel_mobile_imgs">
        <img class="pixel_portrait1" width="244px" src="/img/article/pixel/mob_portrait1.PNG" alt="10x10 pixel drawing of a heart"/>
        <img class="pixel_portrait2" width="244px" src="/img/article/pixel/mob_portrait2.png" alt="32x16 pixel drawing of Mr.Krabs shocked eyes"/>
        <img class="pixel_landscape1" width="500px" src="/img/article/pixel/mob_landscape1.PNG" alt="32x16 pixel drawing of random colored scribbles"/>
        <img class="pixel_landscape2" width="500px" src="/img/article/pixel/mob_landscape2.png" alt="32x16 pixel drawing of deer in a field"/>
      </div>

    </div>
  )
}
*/
function Article () {
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

export default Article
