

// asynchronous action creators

export function fetchUsers() {
  return dispatch => {
    return fetch ("http://localhost:3000/api/v1/users")
      .then(response => response.json())

        .then(users => dispatch({
          type: 'FETCH_USERS',
          payload: users
        }))
  }
}


// .then(users => console.log('fetch:', users))
