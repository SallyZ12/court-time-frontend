
export const deleteReservation = (userId, reservationId) => {

  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/users/${userId}/reservations/${reservationId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(user => {
      if (user.error){
        alert(user.error)
      } else {
      dispatch({type: 'DELETE_RESERVATION', user: user})
      dispatch({type: 'DELETE_RESERVATION_FROM_CURRENT_USER', user: user})
      dispatch({type: 'DELETE_RESERVATION_FROM_COURT', payload: reservationId})
      dispatch({type: 'DELETE_RESERVATION_FROM_CLUB', payload: reservationId})
  }
})
}
}
