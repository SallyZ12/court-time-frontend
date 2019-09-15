
export default (state = {}, action) => {

  switch (action.type) {

    case "SET_CURRENT_USER":
    case "ADD_RESERVATION_TO_CURRENT_USER":
    case "DELETE_RESERVATION_FROM_CURRENT_USER":
    case "ADD_EDITED_USER_TO_CURRENT_USER":
      return action.user

    case "CLEAR_CURRENT_USER":
      return {}

    case "SET_FORM_DATA_FOR_EDIT":
     return action.userFormData

    default:
      return state

    }
}
