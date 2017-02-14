import {combineReducers} from 'redux'
import usersReducer from './usersReducer'
import stocksReducer from './stocksReducer'

const rootReducer = combineReducers({
  users: usersReducer,
  stocks: stocksReducer
})

export default rootReducer
