import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Popular from './Popular.js'
import Battle from './Battle.js'
import Home from './Home.js'
import Nav from './Nav.js'

const App = props =>
     (
      <Router>
        <div className='app'>
          <Nav />
          
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path ='/battle' component={Battle} />
            <Route path ='/popular' component={Popular} />
            <Route render={() => <p>NOT FOUND</p>} />
          </Switch>
        </div>
      </Router>
	)


export default App