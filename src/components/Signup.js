
import React from 'react'
import {connect} from 'react-redux'
import {updateSignupForm} from "../actions/signupForm"



const Signup = ({ signupFormData, updateSignupForm, history, handleSubmit, editMode }) => {

  const handleUserInfoInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }


  return (
    <form onSubmit={event => {
      event.preventDefault()
      handleSubmit(signupFormData)
    }}>
        <h5> Register/Edit </h5>
      <input  type="text"
            placeholder="First Name"
            value={updateSignupForm.first_name}
            name="first_name"
            onChange={handleUserInfoInputChange} />
            <br/>
      <input  type="text"
              placeholder="Last Name"
              value={updateSignupForm.last_name}
              name="last_name"
              onChange={handleUserInfoInputChange} />
              <br/>
      <input  type="text"
              placeholder="email"
              value={updateSignupForm.email}
              name="email"
              onChange={handleUserInfoInputChange} />
              <br/>
      <input  type="text"
              placeholder="username"
              value={updateSignupForm.username}
              name="username"
              onChange={handleUserInfoInputChange} />
              <br/>
      <input  type="text"
              placeholder="password >= 8 chars"
              value={updateSignupForm.password}
              name="password"
              onChange={handleUserInfoInputChange} />
              <br/>
              <label>
              <br/>
              Admin:
      <select value={updateSignupForm.admin}
              onChange={handleUserInfoInputChange}
              name="admin">
              <option value="No">No</option>
              <option value="Yes">Yes</option>
      </select>
              </label>
          <br/>
          <br/>
      <input type="submit" value={editMode ? "Update Player Info" : "Register"}/>
    </form>
)}


const mapStateToProps = state => {
  // console.log("MSTP - Signup:", state.signupFormReducer)
  return {
    signupFormData: state.signupFormReducer
  }
}

export default connect(mapStateToProps, { updateSignupForm})(Signup)
