export default function(state=[], action){
  switch (action.type) {
    case 'QUERY_STOCKS':

      return action.payload.data
    default:
      return state
  }
}
