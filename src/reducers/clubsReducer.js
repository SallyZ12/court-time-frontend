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

    case 'ADD_RESERVATION_TO_CLUB':
        let maxResId1 = (Math.max(...action.payload.reservations.map(reservation => reservation.id)))

          let clubs4 = state.clubs.map(club => {
            if (club.club_name === (action.payload.reservations.find(reservation => reservation.id === maxResId1)).reservation_club) {
              club.club_res.push(action.payload.reservations.find(reservation => reservation.id === maxResId1))}
              return club
          })

        return {...state, clubs: clubs4}

        case 'DELETE_RESERVATION_FROM_CLUB':
        
        let clubs5 = state.clubs.map(club => {
            if (club.club_res.find(reservation => reservation.id === action.payload)) {
                  let new_clubs_array = club.club_res.filter(reservation => reservation.id !== action.payload)
                    club.club_res = new_clubs_array}

              return club
        })
        return {...state, clubs: clubs5}




    case 'ADD_RESERVATION_TO_COURT':
      let maxResId = (Math.max(...action.payload.reservations.map(reservation => reservation.id)))

           let clubs2 = state.clubs.map(club => {
      	        if (club.club_name === (action.payload.reservations.find(reservation => reservation.id === maxResId)).reservation_club) {
                   let court = club.courts.find(court => court.id === (action.payload.reservations.find(reservation => reservation.id === maxResId)).court_id)
      		           court.court_res.push(action.payload.reservations.find(reservation => reservation.id === maxResId))}
      	        return club
           })
            return {...state, clubs: clubs2}


    case 'DELETE_RESERVATION_FROM_COURT':

        let clubs3 = state.clubs.map(club => {
            if (club.club_res.find(reservation => reservation.id === action.payload)) {
                let court = club.courts.find(court => court.id === (club.club_res.find(reservation => reservation.id === action.payload)).court_id)
                  let new_courts_array = court.court_res.filter(reservation => reservation.id !== action.payload)
                    court.court_res = new_courts_array}

              return club
    })
     return {...state, clubs: clubs3}


    default:
      return state
  }
}
