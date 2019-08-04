
const initialState = { users: []}

export default function userReducer(state = initialState, action) {
  switch (action.type) {

    case 'FETCH_USERS':
     return {users: action.payload}

    default:
      return state
  }
}
