import {IndexRoute, Route} from 'react-router'

import App from './components/App'
import CommentShow from './components/CommentShow.js'
import Login from './components/Login'
import Profile from './components/Profile'
import React from 'react'
import StockList from './components/stocks/StockList'
import UserSignUp from './components/UserSignUp'

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ Login } />
    <Route path="login" component={ Login } />
    <Route path="signup" component={ UserSignUp } />
    <Route path="stocks" component={ StockList } />
    <Route path="profile" component={ Profile } />
    <Route path="comments" component={ CommentShow } />
  </Route>
)
