const initialState = { clubs: []}

export default function clubsReducer(state = initialState, action) {
  switch (action.type) {

    case 'ADD_CLUB':
      return {...state, clubs: [...state.clubs,
      action.payload]}

    case 'DISPLAY_CLUBS':
    // console.log("clubsreducer:", action.clubs)
     return {clubs: action.clubs}

    case 'ADD_COURT':
      let clubs = state.clubs.map(club => {
        if (club.id === action.payload.id) {
          return action.payload
        } else {
          return club
        }
      })
        return {...state, clubs: clubs}
    
    default:
      return state
  }
}
