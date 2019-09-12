import React from 'react';

import Signup from '../components/Signup'
import { editUser } from '../actions/currentUser'
import { setFormDataForEdit, resetSignupForm } from '../actions/signupForm'
import { connect } from 'react-redux'

class EditSignupFormWrapper extends React.Component {

  componentDidMount() {
    this.props.currentUser && this.props.setFormDataForEdit(this.props.currentUser)
  }

  componentDidUpdate(prevProps) {
    this.props.currentUser && !prevProps.currentUser && this.props.setFormDataForEdit(this.props.currentUser)
  }

  componentWillUnmount(){
    this.props.resetSignupForm()
  }

  handleSubmit = (userFormData) => {

    const { editUser, currentUser, history } = this.props

      editUser({
        ...userFormData,
        currentUserId: currentUser.id
      }, history)

  }


render() {
  // const { history, currentUser} = this.props

  // const currentUserId = currentUser ? currentUser.id : null
  return <>
    <Signup editMode handleSubmit={this.handleSubmit} />
    <br/>
    </>
  }
}

export default connect(null, {editUser, setFormDataForEdit, resetSignupForm})(EditSignupFormWrapper)
