export default function(state=[], action){
  switch (action.type) {
    case 'CREATE_USER':
      return action.payload.data.user
    case 'LOGIN_USER':
      return !!sessionStorage.jwt
    case 'GET_CURRENT_USER':
      return action.payload.data
    default:
      return state
  }
}
