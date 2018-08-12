import '../css/projects_landing.scss'
import '../css/projects_article.scss'
import '../css/media_projects.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './component/App'


ReactDOM.render(<App />, document.getElementById('react_root'))

/*
//import ArrowsHandler from './projects/ArrowsHandler.js'
//import ScrollHandler from './projects/ScrollHandler.js'

let proj = {}

proj.elements = { list: document.getElementsByClassName('project_main') }
//proj.arrows = new ArrowsHandler(proj.elements)
proj.scroll = new ScrollHandler(proj.elements)
*/
