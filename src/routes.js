import React from 'react'
import { IndexRoute, Route } from 'react-router'

import App from './components/App'
import CommentForm from './components/CommentForm.js'
import CommentShow from './components/CommentShow.js'
import Login from './components/Login'
import Profile from './components/Profile'
import StockList from './components/stocks/StockList'
import Stock from './components/stocks/Stock'
import UserSignUp from './components/UserSignUp'
import Edit from './components/Edit'

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ Login } />
    <Route path="login" component={ Login } />
    <Route path="signup" component={ UserSignUp } />
    <Route path="stocks" component={ StockList } />
    <Route path="stock/:ticker" component={ Stock } />
    <Route path="profile" component={ Profile } />
    <Route path="newcomment" component={ CommentForm } />
    <Route path="comments" component={ CommentShow } />
    <Route path="edit" component={ Edit } />
  </Route>
)
