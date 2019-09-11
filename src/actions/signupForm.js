
export const updateSignupForm = (formData) => {
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

// start of editing user info
export const editSignupForm = user => {
  return {
    type: "EDIT_SIGNUP_FORM",
    user
  }
}

export const setFormDataForEdit = user => {
  const userFormData = {
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    username: user.username,
    password: user.password
    admin: user.admin
  }

  return {
    type: "SET_FORM_DATA_FOR_EDIT",
    userFormData
  }
}
