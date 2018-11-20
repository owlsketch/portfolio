import '../css/projects_landing.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './component/App'

/*
want media queries to implement on React components and normal
elements AFTER all of their own unique stylings have been applied
*/
import '../css/media_projects.scss'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('react_root')
)
