export const displayClubs = clubs => {
  return {
    type: "DISPLAY_CLUBS",
    clubs
  }
}

//asynchronous action creators
export function fetchClubs() {
  return dispatch => {
    return fetch ("http://localhost:3000/api/v1/clubs")
      .then(response => response.json())
      .then(clubs=>dispatch(displayClubs(clubs))
      )
   }
}



  // .then(clubs => console.log(clubs))
