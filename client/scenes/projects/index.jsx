import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Projects from './projects.jsx'

ReactDOM.render(
  <Router>
    <Projects/>
  </Router>,
  document.getElementById('react_root')
)
