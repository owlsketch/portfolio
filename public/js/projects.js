import '../css/projects_landing.scss'
import '../css/projects_article.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './component/App'

//want media queries to implement on React components and normal 
//elements after all of their own unique stylings have been applied
import '../css/media_projects.scss'


ReactDOM.render(<App />, document.getElementById('react_root'))
