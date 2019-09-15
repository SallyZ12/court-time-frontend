
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
export const editSignupForm = currentUser => {
  return {
    type: "EDIT_SIGNUP_FORM",
    currentUser
  }
}

export const setFormDataForEdit = user => {
  const userFormData = {
    id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    username: user.username,
    password: user.password_digest,
    admin: user.admin
  }

  return {
    type: "SET_FORM_DATA_FOR_EDIT",
    userFormData
  }
}
