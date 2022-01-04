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
      <h2 className='article_title'>Across La Tierra: A VR Narrative</h2>
      <article className='article_content'>
        <img className='endmark' width='48px' src='/assets/img/article/owlsketchBlack.png'/>
      </article>
    </div>
  )
}

export { acrossImage, acrossArticle }
