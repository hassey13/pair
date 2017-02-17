import axios from 'axios'


axios.defaults.baseURL = 'http://localhost:4000/api/v1/'
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

export const searchAdapter = {
  queryStocks: (query) => {
    debugger
    return axios.get(`/searchstocks/${query}`).then( response => response )
  }
}
