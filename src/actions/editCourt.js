
export const updateCourtForm = (courtFormData) => {

    return {
      type: "UPDATE_COURT_FORM",
      courtFormData
    }
  }


  export const resetCourtForm = () => {
    return {
      type: "RESET_COURT_FORM"
    }
  }


  export const setCourtFormDataForEdit = court => {

    const courtFormData = {
      id: court.id,
      clubId: court.club_id,
      courtNumber: court.court_number,
      surface: court.surface,
      prime: court.prime,
      non_prime: court.nonPrime
  }

    return {
      type: "SET_COURT_FORM_DATA_FOR_EDIT",
      courtFormData
    }
}
