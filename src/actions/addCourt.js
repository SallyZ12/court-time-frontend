
export const addCourt = (court, clubId) => {

  return (dispatch) => {

    const sendableCourtData ={
      court_number: court.courtNumber,
      club_id: court.club_id,
      surface: court.surface,
      prime: court.prime,
      non_prime: court.nonPrime
    }

    fetch (`http://localhost:3000/api/v1/clubs/${clubId}/courts`, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sendableCourtData)
    })
      .then(response => response.json())
      .then(club => {
        if (club.error) {
          alert(club.error)
        } else {
          dispatch({type: 'ADD_COURT', payload: club})
          }
        })
    }
}


// async action creator
export const editCourt = (court, clubId, history) => {

  return dispatch => {
    const sendableCourtData ={
      court_number: court.courtNumber,
      club_id: court.club_id,
      surface: court.surface,
      prime: court.prime,
      non_prime: court.nonPrime
    }

  return fetch(`http://localhost:3000/api/v1/clubs/${clubId}/courts/${court.courtId}`, {
    credentials: "include",
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableCourtData)
    })
      .then(response => response.json())
      .then(club => {
        if (club.error) {
         alert(club.error)
       } else {
       dispatch({type: "EDIT_COURT", club: club})
       history.push(`/clubs/${club.id}`)
     }
   })
   }
}
