import { userAdapter } from '../adapters/UserAdapter'
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
  const response = stockAdapter.fetchStock()

  return {
    type: 'FETCH_OWNED_STOCKS',
    payload: response
  }
}
