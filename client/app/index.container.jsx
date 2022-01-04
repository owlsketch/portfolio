import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import About from './about.jsx'
import Projects from './projects.jsx'

class IndexContainer extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route
            path='/projects/:projectId'
            render={() => (<Projects />)}
          />
          <Route
            path='/about'
            render={() => (<About />)}
          />
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(<IndexContainer />, document.getElementById('react_root'))
