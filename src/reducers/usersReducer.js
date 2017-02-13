export default function(state=[], action){
  switch (action.type) {
    case 'CREATE_USERS':
      return action.payload.data.first_name
    default:
      return state
  }

}
