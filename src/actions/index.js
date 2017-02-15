import axios from 'axios'
import { browserHistory } from 'react-router'

// import notesAdapter from '../adapters/notesAdapter'

axios.dafaults.URL = 'http://localhost:4000/api/v1'
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')



export const createUser = (user) => {
  const response = axios.post('/signup', user).then((data) => {
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
  const response = axios.post('/login', user).then((response) => {
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
  const response = axios.get('/stocks').then(response => response.data)

  return {
    type: 'FETCH_OWNED_STOCKS',
    payload: response
  }
}
