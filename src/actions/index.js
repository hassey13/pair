import axios from 'axios'
import { browserHistory } from 'react-router'

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
    console.log(response)

    return response
  })

  return {
    type: 'LOGIN_USER',
    payload: response
  }
}
