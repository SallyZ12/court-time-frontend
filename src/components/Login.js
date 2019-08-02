import React from 'react'
import {connect} from 'react-redux'
import {updateLoginForm} from "../actions/loginForm"
import {login} from "../actions/currentUser"

const Login = ({ loginFormData, updateLoginForm, login}) => {

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
              // value={loginFormData.username}
              name="username"
              onChange={handleInputChange} />

      <input  type="text"
              placeholder="password"
              // value={loginFormReducer.password}
              name="password"
              onChange={handleInputChange} />

      <input type="submit" value="Log In"/>
    </form>
  )
}


const mapStateToProps = state => {
  console.log("state:", state)
  return {
    loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login } )(Login)
