export const displayClub = club => {
  return {
    type: "DISPLAY_CLUB",
    club
  }
}

//asynchronous action creators
export const addClub = (data) => {
  return (dispatch) => {
    fetch ('http://localhost:3000/api/v1/clubs', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(club => dispatch(displayClub(club))
    )
  }
}
