const initialState = { clubs: []}

export default function clubsReducer(state = initialState, action) {
  switch (action.type) {

    case 'DISPLAY_CLUBS':
    // console.log("reducer:", action.clubs)
     return {clubs: action.clubs}

    default:
      return state
  }
}
