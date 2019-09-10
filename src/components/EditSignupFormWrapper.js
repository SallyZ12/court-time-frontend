import React from 'react';

import Signup from './components/signup'
import { editUser } from '../actions/currentUser'
import { setFormDataForEdit, resetSignUpForm } from '../actions/signupForm'
import { connect } from 'react-redux'

class EditSignupFormWrapper extends React.Component {

  componentDidMount() {
    this.props.user && this.props.setFormDataForEdit(this.props.user)
  }

  componentWillUnmount(){
    this.props.reserSignupForm()
  }

  handleSubmit = (formData) => {
    const { editUser, user, history } = this.props
      editUser({
        ...formData,
        userId: user.id
      }, history)
  }


render() {
  const { history, user} = this.props
  const userId = user ? user.id : null
  return <>
    <SignUp editMode handleSubmit={this.handleSubmit} />
    <br/>
    </>
  }
}

export default connect(null, {editUser, setFormDataForEdit, resetSignUpForm})(EditSignupFormWrapper)
