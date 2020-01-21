
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
