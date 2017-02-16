import { commentAdapter } from '../adapters/CommentAdapter'
import { stockAdapter } from '../adapters/StockAdapter'
import { userAdapter } from '../adapters/UserAdapter'

export const createUser = (user) => {
  const response = userAdapter.createUser(user)

  return {
    type: 'CREATE_USER',
    payload: response
  }
}

export const loginUser = (user) => {
  const response = userAdapter.logUser(user)

  return {
    type: 'LOGIN_USER',
    payload: response
  }
}

export const getCurrentUser = (user) => {
  const response = userAdapter.getCurrentUser()

  return {
    type: 'GET_CURRENT_USER',
    payload: response
  }
}

export const fetchStocksOwned = () => {
  const response = stockAdapter.fetchStock()

  return {
    type: 'FETCH_STOCKS_OWNED',
    payload: response
  }
}

export const queryStocks = (query) => {
  const response = stockAdapter.queryStocks(query)
  return {
    type: 'QUERY_STOCKS',
    payload: response
  }
}

export const fetchComments = () => {
  const response = commentAdapter.fetchComments()

    return {
    type: 'FETCH_COMMENTS',
    payload: response
  }
}

export function addComment(commentParams){
  const comment = commentAdapter.createComment(commentParams)

  return {
    type: 'ADD_COMMENT',
    payload: comment
  }
}

export function updateComment(comment){
  commentAdapter.updateComment(comment)

  return {
    type: 'UPDATE_NOTE',
    payload: {
      id: comment.id,
      message: comment.message
    }
  }
}

export const followStock = (params) => {
  const response = stockAdapter.followStock(params)

  return {
    type: 'ADD_STOCK',
    payload: response

  }
}

export const unfollowStock = (params) => {
  const response = stockAdapter.unfollowStock(params)

  return {
    type: 'REMOVE_STOCK',
    payload: response
  }
}
