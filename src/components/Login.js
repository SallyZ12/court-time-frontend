import React from 'react'
import {connect} from 'react-redux'
import {login} from "../actions/currentUser"
import {updateLoginForm} from "../actions/loginForm"
import {resetLoginForm} from "../actions/loginForm"


const Login = ({ loginFormData, updateLoginForm, login, resetLoginForm}) => {
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
    resetLoginForm()
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

export default connect(mapStateToProps, { updateLoginForm, login, resetLoginForm } )(Login)
