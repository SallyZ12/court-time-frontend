
const initialState = { users: []}

export default function usersReducer(state = initialState, action) {
  switch (action.type) {

    case 'DISPLAY_USERS':
    // console.log("reducer:", action.users)
     return {users: action.users}

     // case 'DISPLAY_USER':
     {/*return {user: action.user}*/}

    default:
      return state
  }
}
