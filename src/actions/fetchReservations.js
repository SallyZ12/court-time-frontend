export const displayReservations = reservations => {
  return {
    type: "DISPLAY_RESERVATIONS",
    clubs
  }
}

//asynchronous action creators
export function fetchReservations(reservationId, currentUserId) {
  return dispatch => {
    return fetch (`http://localhost:3000/api/v1/users/${userId}/reservations`), {
      .then(response => response.json())
      .then(reservations=>dispatch(displayReservations(reservations))
    }
    )}
  }
