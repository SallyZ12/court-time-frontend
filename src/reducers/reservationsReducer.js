const initialState = { reservations: []}

export default function reservationsReducer(state = initialState, action) {
  switch (action.type) {

    case 'ADD_RESERVATION':
      return
      let users = state.users.map(user => {
        if (user.id === action.payload.id) {
          return action.payload
        } else {
          return user
        }
      })
        return {...state, users: users}


      case 'DISPLAY_RESERVATIONS':
      return {...state}


    default:
      return state
  }
}
