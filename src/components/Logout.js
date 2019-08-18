import React from 'react'

import { connect } from 'react-redux'
import { logout } from "../actions/currentUser.js"
import Button from 'react-bootstrap/Button';

const Logout = ({ logout }) => {
  return (
    <form onSubmit={(event) => {
        event.preventDefault()
        logout()
      }
    }>
    <br/><br/>
      <Button variant="primary"><input type="submit" value="Log Out"/></Button>
    </form>
  )
}

export default connect(null, { logout } )(Logout)
