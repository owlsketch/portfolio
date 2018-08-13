import React from 'react'
import { Route } from 'react-router-dom'

import ProjectNav from './ProjectNav'
import Gallery from './Gallery'
import Pixel from './Pixel'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <ProjectNav />
        <Route path="/projects/gallery" component={Gallery} />
        <Route path="/projects/pixel" component={Pixel} />
      </React.Fragment>
    )
  }
}

export default App
