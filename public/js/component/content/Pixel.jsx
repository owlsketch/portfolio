import React from 'react'

function pixelImage (fixed) {
  let imgClasses =  `project_img pixel_imgs`
  if (!fixed) imgClasses += ` project_img_absolute`

  return (
    <div className={imgClasses}>
      <img className="img_pixel_wall" width="525px" src="/img/landing/pixel/pixelwall.png" alt="10x10 pixel wall device" />
    </div>
  )
}

function pixelArticle () {
  return (
    <div className="proj_article">

      <div className="proj_description">
        <p>
          Made for GRID, the Pixel Wall is an interactive LED Display designed
          to welcome students to a space that both promotes participation with
          technology and provides resources for students to learn and create.
        </p>
      </div>

      <div className="proj_links">
        <a href="https://owlsketch.com/pixel">Visit Pixel Wall</a>
        <a href="https://github.com/RutgersGRID/pixelwall">View Code</a>
      </div>
      <div className="pixel_mobile_imgs">
        <img className="pixel_portrait1" width="244px" src="/img/article/pixel/mob_portrait1.PNG" alt="10x10 pixel drawing of a heart"/>
        <img className="pixel_portrait2" width="244px" src="/img/article/pixel/mob_portrait2.png" alt="32x16 pixel drawing of Mr.Krabs shocked eyes"/>
        <img className="pixel_landscape1" width="500px" src="/img/article/pixel/mob_landscape1.PNG" alt="32x16 pixel drawing of random colored scribbles"/>
        <img className="pixel_landscape2" width="500px" src="/img/article/pixel/mob_landscape2.png" alt="32x16 pixel drawing of deer in a field"/>
      </div>

    </div>
  )
}

export { pixelImage, pixelArticle }
