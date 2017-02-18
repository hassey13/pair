export default function currentStockReducer(state="", action){
  switch (action.type) {
    case 'ADD_STOCK':
      return action.payload.ticker
    case 'UPDATE_CURRENT_STOCK':
      return action.payload
    default:
      return state
  }
}
