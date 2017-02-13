import axios from 'axios'
import { browserHistory } from 'react-router'

const URL = 'http://localhost:4000/api/v1/'

export const createUser = (user) => {
  const response = axios.post(URL + 'signup', user).then((data) => {
    sessionStorage.setItem('jwt',response.data.jwt)
    // browserHistory.push("/users")
    debugger
    return response
  })

  return {
    type: 'CREATE_USER',
    payload: response
  }
}
