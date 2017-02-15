import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './components/App'
import UserSignUp from './components/UserSignUp'
import Login from './components/Login'
import StockList from './components/stocks/StockList'
import Profile from './components/Profile'


export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ Login } />
    <Route path="login" component={ Login } />
    <Route path="signup" component={ UserSignUp } />
    <Route path="stocks" component={ StockList } />
    <Route path="profile" component={ Profile } />
  </Route>
)
