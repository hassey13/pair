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
  const response = userAdapter.logUser(user)

  return {
    type: 'LOGIN_USER',
    payload: response
  }
}

export const fetchStocksOwned = () => {
  const response = stockAdapter.fetchStock()

  return {
    type: 'FETCH_STOCKS_OWNED',
    payload: response
  }
}

export const queryStocks = (query) => {
  const response = stockAdapter.queryStocks(query)
  return {
    type: 'QUERY_STOCKS',
    payload: response
  }
}
