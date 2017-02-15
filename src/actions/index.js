import axios from 'axios'
import { browserHistory } from 'react-router'
import { ApiKey } from '../../secret/ApiKey'

const URL = 'http://localhost:4000/api/v1/'

export const createUser = (user) => {
  const response = axios.post(URL + 'signup', user).then((data) => {
    sessionStorage.setItem('jwt', data.jwt)
    browserHistory.push("/users")
    return data
  })

  return {
    type: 'CREATE_USER',
    payload: response
  }
}

export const loginUser = (user) => {
  const response = axios.post(URL + 'login', user).then((response) => {
    sessionStorage.setItem('jwt', response.data.jwt)
    browserHistory.push("/users")
    return response
  })

  return {
    type: 'LOGIN_USER',
    payload: response
  }
}

export const fetchStocksOwned = () => {
  const response = axios.get(URL + 'stocks').then(response => response.data)

  return {
    type: 'FETCH_OWNED_STOCKS',
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
