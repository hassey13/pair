export default function(state=[], action){
  switch (action.type) {
    case 'FETCH_OWNED_STOCKS':
      return {
        symbols: action.payload,
        data: state.data
      }
    case 'FETCH_STOCK_CARD_DATA':
      return {
        symbols: state.symbols,
        data: [...state.data, action.payload]
      }
    default:
      return state
  }
}
