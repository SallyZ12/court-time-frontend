import React from 'react'

import { connect } from 'react-redux'
import { logout } from "../actions/currentUser.js"
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';

const Logout = ({ logout, history }) => {
  return (
    <form onSubmit={(event) => {
        event.preventDefault()
        logout()
        history.push("/")
      }
    }>
    <br/><br/>
      <Button variant="primary"><input type="submit" value="Log Out"/></Button>
    </form>
  )
}

export default withRouter(connect(null, { logout } )(Logout))
