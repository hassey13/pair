
export default function(state=[], action){
  switch (action.type) {
    case 'FETCH_COMMENTS':
      return action.payload
    case 'ADD_COMMENT':
      return [...state, action.payload ]
    case 'UPDATE_COMMENT':
      return state.map((comment) => {
        if (comment.id !== action.payload.id ) {
          return comment
        } else {
          return action.payload
        }
      })
    default:
      return state
  }

}
