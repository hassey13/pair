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


export function addComment(message){
  const comment = commentAdapter.createComment({message: message, user_id: 1, stock_id: 1 })

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
