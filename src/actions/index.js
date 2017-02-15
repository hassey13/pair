import { browserHistory } from 'react-router'
import { userAdapter } from '../adapters/UsersAdapter'
import { stockAdapter } from '../adapters/StockAdapter'

export const createUser = (user) => {

  const response = userAdapter.createUser(user)

  return {
    type: 'CREATE_USER',
    payload: response
  }
}

export const loginUser = (user) => {
  const response = userAdapter.loginUser(user)

  return {
    type: 'LOGIN_USER',
    payload: response
  }
}

export const fetchStocksOwned = () => {

  return {
    type: 'FETCH_OWNED_STOCKS',
    payload: response
  }
}
