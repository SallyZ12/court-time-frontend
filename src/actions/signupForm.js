

export const updateSignupForm = formdata => {
  return {
    type: "UPDATE_SIGNUP_FORM",
    formData
  }
}


export const resetSignupForm = () => {
  return {
    type: "RESET_SIGNUP_FORM"
  }
}
