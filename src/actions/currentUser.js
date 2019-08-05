import {resetSignupForm} from "../actions/signupForm"

// synchronous action creators
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}

// asynchronous action creators

export const login = (credentials) => {
  // console.log("credentials:",credentials)
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
     .then(response => response.json())
     .then(user => {
       if(user.error) {
         alert(user.error)
       } else {
         dispatch(setCurrentUser(user))
       }
       })
       .catch(console.log)
  }
}

export const signup = (credentials) => {
  // console.log("signup credentials:",credentials)
  return dispatch => {
      const userInfo = {
        user: credentials
      }
    return fetch("http://localhost:3000/api/v1/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
     .then(response => response.json())
     .then(signup => {
       if(signup.error) {
         alert(signup.error)
       } else {
         dispatch(setCurrentUser(signup))
         dispatch(resetSignupForm())
       }
       })
       .catch(console.log)
  }
}




export const logout = event => {
  return dispatch => {
    dispatch(clearCurrentUser())
    return fetch("http://localhost:3000/api/v1/logout", {
      credentials: "include",
      method: "DELETE"
    })
  }
}




export const getCurrentUser = () => {
  // console.log("Dispatching Get Current User")
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/get_current_user", {
      credentials: "include",
      method: "GET",
      headers: {
          "Content-Type": "application/json"
      },
    })
      .then(response => response.json())
      .then(user => {
        if(user.error) {
          alert(user.error)
        } else {
          dispatch(setCurrentUser(user))
        }
      })
       .catch(console.log)
  }
}
