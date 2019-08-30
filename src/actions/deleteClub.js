
export const deleteClub = (clubId) => {

  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/clubs/${clubId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(club => {
      if (club.error){
        alert(club.error)
      } else {
      (dispatch({type: 'DELETE_CLUB', payload: club}))
  }
})
}
}
