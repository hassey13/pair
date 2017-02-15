import { browserHistory } from 'react-router'
import { userAdapter } from '../adapters/UsersAdapter'

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
  const response = axios.get('http://localhost:4000/api/v1/stocks').then(response => response.data)

  return {
    type: 'FETCH_OWNED_STOCKS',
    payload: response
  }
}
