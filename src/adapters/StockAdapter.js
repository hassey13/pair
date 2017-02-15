// import { browserHistory } from 'react-router'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000/api/v1/'
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

export const stockAdapter = {
  fetchStock: () => {
    return axios.get('fetchstocks').then(response => response)
  },

  queryStocks: (query) => {
    return axios.get(`/searchstocks/${query}`).then(response => response)
  }
}
