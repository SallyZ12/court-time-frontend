
import React from 'react'
import {connect} from 'react-redux'
import {signup} from '../actions/currentUser'
import {updateSignupForm} from "../actions/signupForm"
// import {editSignupForm}  from "../actions/signupForm"
import {addUser} from "../actions/currentUser"



// const Signup = ({ signupFormData, updateSignupForm, editSignupForm, signup, addUser, history, editMode}) => {

const Signup = ({ signupFormData, updateSignupForm, signup, addUser, history, editMode}) => {

  const handleUserInfoInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    signup(signupFormData, history)
  }

  return (
    <form onSubmit={handleSubmit}>
        <h5> Register </h5>
      <input  type="text"
            placeholder="First Name"
            value={signupFormData.first_name}
            name="first_name"
            onChange={handleUserInfoInputChange} />
            <br/>
      <input  type="text"
              placeholder="Last Name"
              value={signupFormData.last_name}
              name="last_name"
              onChange={handleUserInfoInputChange} />
              <br/>
      <input  type="text"
              placeholder="email"
              value={signupFormData.email}
              name="email"
              onChange={handleUserInfoInputChange} />
              <br/>
      <input  type="text"
              placeholder="username"
              value={signupFormData.username}
              name="username"
              onChange={handleUserInfoInputChange} />
              <br/>
      <input  type="text"
              placeholder="password >= 8 chars"
              value={signupFormData.password}
              name="password"
              onChange={handleUserInfoInputChange} />
              <br/>
              <label>
              <br/>
              Admin:
      <select value={signupFormData.admin}
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

  )
}

const mapStateToProps = state => {
  // console.log("MSTP - Signup:", state.signupFormReducer)
  return {
    signupFormData: state.signupFormReducer
  }
}

export default connect(mapStateToProps, { updateSignupForm,  signup, addUser})(Signup)
// export default connect(mapStateToProps, { updateSignupForm,  signup, addUser})(Signup)
  // <input type="submit" value={editMode ? "Edit User" : "Register"}/>
