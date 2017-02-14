import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './components/App'
import UserSignUp from './components/UserSignUp'
import Login from './components/Login'
import Home from './components/Home'


export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ Login } />
    <Route path="login" component={ Login } />
    <Route path="signup" component={ UserSignUp } />
    <Route path="users" component={ Home } />
  </Route>
)
