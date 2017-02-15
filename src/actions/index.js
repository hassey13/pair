import { browserHistory } from 'react-router'
import { userAdapter } from '../adapters/UsersAdapter'

export const createUser = (user) => {
  const response = userAdapter.createUser(user)

  return {
    type: 'CREATE_USER',
    payload: response
  }
}

export const loginUser = (user) => {
  const response = userAdapter.loginUser(user)

  return {
    type: 'LOGIN_USER',
    payload: response
  }
}
