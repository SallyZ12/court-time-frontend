
const initialState = { users: []}

export default function usersReducer(state = initialState, action) {
  switch (action.type) {

    case 'DISPLAY_USERS':
    // console.log("reducer:", action.users)
     return {users: action.users}

    default:
      return state
  }
}
