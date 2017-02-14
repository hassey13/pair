export default function(state=[], action){
  switch (action.type) {
    case 'CREATE_USERS':
      return action.payload.data.first_name
    case 'LOGIN_USER':
      return action.payload.data
    default:
      return state
  }
}
