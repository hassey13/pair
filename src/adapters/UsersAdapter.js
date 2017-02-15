import { browserHistory } from 'react-router'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000/api/v1/'
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

const userAdapter = {
  createUser: (user) => {
    return axios.post('signup', user).then((response) => {
      sessionStorage.setItem('jwt', response.jwt)
      browserHistory.push("/users")

      return response
    })
  },

  loginUser: (user) => {
    return axios.post('login', user).then((response) => {
      sessionStorage.setItem('jwt', response.data.jwt)
      browserHistory.push("/users")

      return response
    })
  }
}
