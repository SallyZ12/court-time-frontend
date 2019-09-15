
import React from 'react'
import {connect} from 'react-redux'
import {updateSignupForm} from "../actions/signupForm"



const Signup = ({ signupFormData, updateSignupForm, history, currentUser, handleSubmit, editMode }) => {

// when const signupFormData in the value only need to use the name rather than signupFormData.first_name, etc.
  const { first_name, last_name, username, email, password, admin} = signupFormData


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
            value={first_name}
            name="first_name"
            onChange={handleUserInfoInputChange} />
            <br/>
      <input  type="text"
              placeholder="Last Name"
              value={last_name}
              name="last_name"
              onChange={handleUserInfoInputChange} />
              <br/>
      <input  type="text"
              placeholder="email"
              value={email}
              name="email"
              onChange={handleUserInfoInputChange} />
              <br/>
      <input  type="text"
              placeholder="username"
              value={username}
              name="username"
              onChange={handleUserInfoInputChange} />
              <br/>
      <input  type="text"
              placeholder="password >= 8 chars"
              value={password}
              name="password"
              onChange={handleUserInfoInputChange} />
              <br/>
              <label>
              <br/>
              Admin:
      <select value={admin}
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

  return {
    signupFormData: state.signupFormReducer

  }
}

export default connect(mapStateToProps, { updateSignupForm })(Signup)
