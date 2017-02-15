export default function(state=[], action){
  switch (action.type) {
    case 'FETCH_OWNED_STOCKS':
      return action.payload
    default:
      return state
  }
}
