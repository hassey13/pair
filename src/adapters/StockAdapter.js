import { browserHistory } from 'react-router'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000/api/v1/'
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

const stockAdapter = {
  fetchStock: () => {
    return axios.get('stocks').then(response => response.data)
  }
}
