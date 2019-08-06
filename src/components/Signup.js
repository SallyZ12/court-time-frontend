
import React from 'react'
import {connect} from 'react-redux'
import {signup} from '../actions/currentUser'
import {updateSignupForm} from "../actions/signupForm"
// import {resetSignupForm} from "../actions/signupForm"


const Signup = ({ signupFormData, updateSignupForm, signup, resetSignupForm}) => {

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
    signup(signupFormData)
    // resetSignupForm()
  }

  return (

    <form onSubmit={handleSubmit}>
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
              placeholder="password"
              value={signupFormData.password}
              name="password"
              onChange={handleUserInfoInputChange} />
              <br/>
              <label>
              
              Admin:
      <select value={signupFormData.admin}
              onChange={handleUserInfoInputChange}>
              name="admin"
              <option value="No">No</option>
              <option value="Yes">Yes</option>
      </select>
          </label>
          <br/>
      <input type="submit" value="Register"/>
    </form>

  )
}

const mapStateToProps = state => {
  console.log("MSTP - Signup:", state.signupFormReducer)
  return {
    signupFormData: state.signupFormReducer
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)
