
export const addReservation = (reservation) => {

  return dispatch => {
  
    fetch (`http://localhost:3000/api/v1/users/${reservation.user_id}/reservations`, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservation)
    })
      .then(response => response.json())
      .then(user => {
        if (user.error) {
          alert(user.error)
        } else {
          dispatch({type: 'ADD_RESERVATION', payload: user })
    }
  })
  }
}



// .then(user => {console.log(user)})
