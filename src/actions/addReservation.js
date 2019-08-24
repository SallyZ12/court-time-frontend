
export const addReservation = (reservation, currentUserId, courtId) => {
  return dispatch => {
    fetch (`http://localhost:3000/api/v1/users/${currentUserId}/reservations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservation)
      .then(response => response.json())
      .then(user => dispatch(type: 'ADD_RESERVATION', payload: user })
    })
    }
  }
