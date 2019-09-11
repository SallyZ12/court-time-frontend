import React from 'react';

import Signup from '../components/Signup'
import { editUser } from '../actions/currentUser'
import { setFormDataForEdit, resetSignupForm } from '../actions/signupForm'
import { connect } from 'react-redux'

class EditSignupFormWrapper extends React.Component {

  componentDidMount() {
    this.props.users && this.props.setFormDataForEdit(this.props.users)
  }

  componentDidUpdate(prevProps) {
    this.props.user && !prevProps.user && this.props.setFormDataForEdit(this.props.user)
  }

  // componentWillUnmount(){
  //   this.props.resetSignupForm()
  // }

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
    <Signup editMode handleSubmit={this.handleSubmit} />
    <br/>
    </>
  }
}

export default connect(null, {editUser, setFormDataForEdit, resetSignupForm})(EditSignupFormWrapper)
