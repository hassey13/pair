import React from 'react'
import ReactDOM from 'react-dom'

import routes from './routes'
import { Router, browserHistory } from 'react-router'

import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import rootReducer from './reducers'

import { Provider } from 'react-redux'

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware) )

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('container')
)
