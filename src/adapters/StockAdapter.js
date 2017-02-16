// import { browserHistory } from 'react-router'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000/api/v1/'
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

export const stockAdapter = {
  fetchStock: () => {
    return axios.get('fetchstocks').then(response => response.data)
  },

  queryStocks: (query) => {
    return axios.get(`/searchstocks/${query}`).then(response => response)
  },

  followStock: (params) => {
    return axios.post('/stocks', params).then(response => response.data)
  },

  unfollowStock: (params) => {
    return axios.post('/unfollow', params).then(response => response.data)
  }
}
