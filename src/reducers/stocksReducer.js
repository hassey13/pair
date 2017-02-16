export default function(state=[], action){
  switch (action.type) {
    case 'FETCH_STOCKS_OWNED':
      return action.payload
    case 'QUERY_STOCKS':
      return state
      case 'ADD_STOCK':
        return [...state, action.payload]
    default:
      return state
  }
}
