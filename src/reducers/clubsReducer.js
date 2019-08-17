const initialState = { clubs: []}

export default function clubsReducer(state = initialState, action) {
  switch (action.type) {

    case 'ADD_CLUB':
      return {...state, clubs: [...state.clubs,
      action.payload]}

    case 'DISPLAY_CLUBS':
    // console.log("clubsreducer:", action.clubs)
     return {clubs: action.clubs}


    default:
      return state
  }
}
