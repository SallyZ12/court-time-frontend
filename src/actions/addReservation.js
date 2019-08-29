
export const addReservation = (reservation, userId) => {

  return dispatch => {
    fetch (`http://localhost:3000/api/v1/users/${userId}/reservations`, {
      method: 'POST',
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
