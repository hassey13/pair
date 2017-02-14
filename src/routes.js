import React from 'react'
import {Route} from 'react-router'

import App from './components/App'
import UserSignUp from './components/UserSignUp'


export default (
  <Route path="/" component={ App }>
    <Route path="signup" component={ UserSignUp } />
    <Route path="users" component={ App } />
  </Route>
)
