
export const addReservation = (reservation, currentUserId, courtId) => {
  return dispatch => {
    fetch (`http://localhost:3000/api/v1/courts/${courtId}/reservations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservation)
      .then(response => response.json())
      .then(reservation => dispatch(type: 'ADD_RESERVATION', payload: reservation})
    })
    }
  }
