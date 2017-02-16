export default function(state=[], action){
  switch (action.type) {
    case 'FETCH_STOCKS_OWNED':
      return action.payload
    case 'ADD_STOCK':
      return [...state, action.payload]
    case 'REMOVE_STOCK':
      const new_state = state.filter(stock => stock.identifier !== action.payload)
      return new_state
    default:
      return state
  }
}
