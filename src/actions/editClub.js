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


  export const setClubFormDataForEdit = club => {
    const clubFormData = {
      id: club.id,
      clubName: club.club_name,
      location: club.location,
  }

    return {
      type: "SET_CLUB_FORM_DATA_FOR_EDIT",
      clubFormData
    }
  }

  export const updateClubForm = (clubFormData) => {
      return {
        type: "UPDATE_CLUB_FORM",
        clubFormData
      }
    }

    export const resetClubForm = () => {
      return {
        type: "RESET_CLUB_FORM"
      }
    }
