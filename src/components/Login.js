import React from 'react'
import {connect} from 'react-redux'
import {updateLoginForm} from "../actions/loginForm"
import {login} from "../actions/currentUser"

const Login = ({ loginFormData, updateLoginForm, login}) => {
console.log("formdata:",loginFormData)
  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...loginFormData,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    login(loginFormData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input  type="text"
              placeholder="username"
              value={loginFormData.username}
              name="username"
              onChange={handleInputChange} />

      <input  type="text"
              placeholder="password"
              value={loginFormData.password}
              name="password"
              onChange={handleInputChange} />

      <input type="submit" value="Log In"/>
    </form>
  )
}


const mapStateToProps = state => {
  console.log("state:", state.loginFormReducer)
  return {
    loginFormData: state.loginFormReducer
  }
}

export default connect(mapStateToProps, { updateLoginForm, login } )(Login)
