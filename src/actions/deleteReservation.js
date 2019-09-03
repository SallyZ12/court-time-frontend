
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
      (dispatch({type: 'DELETE_RESERVATION', payload: user}))
  }
})
}
}
