export default function(state=[], action){
  switch (action.type) {
    case 'FETCH_STOCKS_OWNED':
      return action.payload
    case 'QUERY_STOCKS':
      return action.payload
    default:
      return state
  }
}
