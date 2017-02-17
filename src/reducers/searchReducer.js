export default function(state=[], action){
  switch (action.type) {
    case 'QUERY_STOCKS':
      debugger
      return action.payload.data
    default:
      return state
  }
}
