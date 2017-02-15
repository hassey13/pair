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
  const response = stockAdapter.fetchStock()

    return {
    type: 'FETCH_STOCKS_OWNED',
    payload: response
  }
}

// export const fetchStockCardData = (ticker) => {
//
//   var config = { headers: { Authorization: 'Basic ' + btoa(ApiKey.password) }}
//
//   var baseURL = "https://api.intrinio.com/prices?ticker="
//   var timePeriod = '&item=close_price&start_date=2017-02-13&end_date=2017-02-14'
//   var URL = baseURL + ticker + timePeriod
//
//   const response = axios.get(URL, config).then(response => response.data)
//
//   console.log(response)
//
//   return {
//     type: 'FETCH_STOCK_CARD_DATA',
//     payload: response
//   }
// }
