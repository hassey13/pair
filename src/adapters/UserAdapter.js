import { browserHistory } from 'react-router'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000/api/v1/'
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

export const userAdapter = {
  createUser: (user) => {
    return axios.post('signup', user).then((response) => {
      sessionStorage.setItem('jwt', response.jwt)
      browserHistory.push("/profile")

      return response
    })
  },

  logUser: (user) => {
    return axios.post('login', user).then((response) => {
      sessionStorage.setItem('jwt', response.data.jwt)
      browserHistory.push("/profile")

      return response
    })
  },

  getCurrentUser: () => {
    return axios.get('users/1').then( response => response )
  }
}
