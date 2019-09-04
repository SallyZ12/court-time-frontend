import React from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'

const NavBar =  ({ currentUser}) => {
// console.log("currentUser:", currentUser)
  return (
    <div className="NavBar">
       {currentUser ? <h4> Welcome, {currentUser.first_name} </h4> : ""}
       {currentUser ?  <p> <NavLink exact to={`users/${currentUser.id}`}>Reservations</NavLink></p> : ""}
    </div>
  )
}


const mapStateToProps = (state) => {

  return {
    currentUser: state.currentUserReducer

  }
}

export default connect(mapStateToProps)(NavBar)


  // { loggedIn ? <><p id="loggedin">Logged in as {currentUser.attributes.name}</p><Logout/></> : null}
