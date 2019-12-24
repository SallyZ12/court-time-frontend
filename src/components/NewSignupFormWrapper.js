import React from 'react';

import Signup from '../components/Signup'
import {signup} from '../actions/currentUser'
import { connect } from 'react-redux'

const NewSignupFormWrapper = ( {history, signup }) => {

  const handleSubmit = (formData, userId) => {
      signup({
        ...formData,
       userId
     }, history)
  }
  
  return <Signup history= {history} handleSubmit={handleSubmit} />
}

export default connect(null, { signup })(NewSignupFormWrapper)
