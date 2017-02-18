import {combineReducers} from 'redux'
import usersReducer from './usersReducer'
import stocksReducer from './stocksReducer'
import commentsReducer from './commentsReducer'
import searchReducer from './searchReducer'
import currentStockReducer from './currentStockReducer'
import sessionReducer from './sessionReducer'

const rootReducer = combineReducers({
  users: usersReducer,
  stocks: stocksReducer,
  comments: commentsReducer,
  search: searchReducer,
  currentStock: currentStockReducer
  session: sessionReducer
})

export default rootReducer
