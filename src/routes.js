import {IndexRoute, Route} from 'react-router'

import App from './components/App'
import CommentForm from './components/CommentForm.js'
import Login from './components/Login'
import Profile from './components/Profile'

import React from 'react'
import StockList from './components/stocks/StockList'
import UserSignUp from './components/UserSignUp'

import Edit from './components/Edit'



export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ Login } />
    <Route path="login" component={ Login } />
    <Route path="signup" component={ UserSignUp } />
    <Route path="stocks" component={ StockList } />
    <Route path="profile" component={ Profile } />

    <Route path="newcomment" component={ CommentForm } />

    <Route path="edit" component={ Edit } />

  </Route>
)
