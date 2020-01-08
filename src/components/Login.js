import React from 'react'
import {connect} from 'react-redux'
import {login} from "../actions/currentUser"
import {updateLoginForm} from "../actions/loginForm"
import {resetLoginForm} from "../actions/loginForm"


const Login = ({ loginFormData, updateLoginForm, login, resetLoginForm, history}) => {

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
    login(loginFormData, history)
    resetLoginForm()
  }

  return (
    <form onSubmit={handleSubmit}>
       <h5> Login </h5>
      <input  type="text"
              placeholder="username"
              value={loginFormData.username}
              name="username"
              onChange={handleInputChange} />
              <br/>
      <input  type="password"
              placeholder="password >= 8 chars"
              value={loginFormData.password}
              name="password"
              onChange={handleInputChange} />
              <br/><br/>
      <input type="submit" value="Log In"/>
    </form>

  )
}


const mapStateToProps = state => {

  return {
    loginFormData: state.loginFormReducer
  }
}

export default connect(mapStateToProps, { updateLoginForm, login, resetLoginForm } )(Login)
