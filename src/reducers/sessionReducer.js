import initialState from './initialState';
import { browserHistory } from 'react-router';

export default function sessionReducer(state = initialState.session, action) {
  switch(action.type) {
    case 'LOG_IN_SUCCESS':
      debugger
      browserHistory.push('/profile')
      return !!sessionStorage.jwt
    default:
      return state;
  }
}
