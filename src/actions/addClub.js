import {resetClubForm} from "../actions/editClub"


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
        dispatch(resetClubForm())
        history.push('/')

      }
    })
  }
}


// async action creator
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
       dispatch({type: "EDIT_CLUB", club: club})
       history.push(`/clubs/${club.id}`)
     }
   })
   }
}
