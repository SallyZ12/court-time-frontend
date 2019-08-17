export const displayUsers = users => {
  // console.log("display:", users)
  return {
    type: "DISPLAY_USERS",
    users
  }
}



// asynchronous action creators

export function fetchUsers() {
  return dispatch => {
    return fetch ("http://localhost:3000/api/v1/users")
      .then(response => response.json())
      .then(users => dispatch(displayUsers(users))
    )
  }
}
