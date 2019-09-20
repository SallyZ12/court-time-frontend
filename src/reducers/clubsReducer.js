const initialState = { clubs: []}

export default function clubsReducer(state = initialState, action) {
  switch (action.type) {

    case 'ADD_CLUB':
      return {...state, clubs: [...state.clubs, action.payload]}

    case 'DISPLAY_CLUBS':
     return {clubs: action.clubs}

     case 'DELETE_CLUB':
     return {...state, clubs: state.clubs.filter(club=> club.id !== action.payload.id)}


    case 'ADD_COURT':
    case 'DELETE_COURT':
      let clubs = state.clubs.map(club => {
        if (club.id === action.payload.id) {
          return action.payload
        } else {
          return club
        }
      })
        return {...state, clubs: clubs}


    case 'ADD_RESERVATION_TO_COURT':

    let clubs2 = state.clubs.map(club => {
      	if (club.club_name === action.payload.reservations[action.payload.reservations.length-1].reservation_club) {
              let court = club.courts.find(court => court.id === action.payload.reservations[action.payload.reservations.length-1].court_id)
      		court.court_res.push(action.payload.reservations.find(reservation => reservation.id === (Math.max(...action.payload.reservations.map(reservation => reservation.id)))))}
      	return club
      })
      return {...state, clubs: clubs2}


    default:
      return state
  }
}
