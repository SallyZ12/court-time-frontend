
export const addCourt = (court, clubId) => {

  return (dispatch) => {
    fetch (`http://localhost:3000/api/v1/clubs/${clubId}/courts`, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(court)
    })
      .then(response => response.json())
      .then(club => {
        if (club.error) {
          alert(club.error)
        } else {
          dispatch({type: 'ADD_COURT', payload: club})
  }
})

// .catch(console.log)
}
}
