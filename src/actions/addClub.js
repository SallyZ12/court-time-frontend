
//asynchronous action creators
export const addClub = (clubData, history) => {

  return (dispatch) => {
    const sendableClubData ={
          club_name: clubData.clubName,
          location: clubData.location
        }

    fetch ('http://localhost:3000/api/v1/clubs', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(sendableClubData)
    })
      .then(response => response.json())
      .then(club => {
        if(club.error) {
          alert(club.error)
      } else {
        dispatch({type: 'ADD_CLUB', payload: club})


      }
    })
  }
}
