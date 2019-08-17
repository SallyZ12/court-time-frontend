const initialState = { clubs: []}

export default function clubsReducer(state = initialState, action) {
  switch (action.type) {

    case 'ADD_CLUB':
      return {...state, clubs: [...state.clubs,
      action.club]}

    case 'DISPLAY_CLUBS':
    // console.log("clubsreducer:", action.clubs)
     return {clubs: action.clubs}

     case 'DISPLAY_CLUB':
      return {club: action.club}

    default:
      return state
  }
}
