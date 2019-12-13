export const editClub = (club, history) => {

  return dispatch => {

      const clubInfo = {
        club: club
      }
    return fetch(`http://localhost:3000/api/v1/clubs/${club.clubId}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(clubInfo)
    })
     .then(response => response.json())
     .then(club => {
       if (club.error) {
         alert(club.error)
       } else {
       dispatch({type: "EDIT_Club", club: club})
       history.push(`/clubs/${club.id}`)
     }
   })
   }
  }
