export default function(state=[], action){
  switch (action.type) {
    case 'CREATE_USERS':
      return action.payload
    default:
      return state
  }

}
