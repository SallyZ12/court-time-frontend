
export const addCourt = (court, clubId) => {
  return (dispatch) => {
    fetch (`http://localhost:3000/api/v1/clubs/${clubId}/courts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(court)
    })
      .then(response => response.json())
      .then(club => dispatch({type: 'ADD_COURT', payload: club}))
  }
}
