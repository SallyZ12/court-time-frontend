export default (state = null, action) => {

  switch (action.type) {

    case "SET_CURRENT_USER":
    // console.log("action.user:", action.user)
      return action.user

    case "CLEAR_CURRENT_USER":
      return null

    default:
      return state
  }
}
