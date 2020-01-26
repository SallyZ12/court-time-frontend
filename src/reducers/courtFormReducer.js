const initialState = {
  courtNumber: "",
  surface: "Hard",
  prime: "",
  nonPrime: ""
}

export default (state=initialState, action) => {

  switch (action.type){

    case "UPDATE_COURT_FORM":
     return action.courtFormData

    case "SET_COURT_FORM_DATA_FOR_EDIT":
      return action.courtFormData

    case "RESET_COURT_FORM":
      return initialState

    default:
      return state
  }
}
