import React from 'react'
import { connect } from 'react-redux'


const NavBar =  ({ currentUser}) => {
// console.log("currentUser:", currentUser)
  return (
    <div className="NavBar">
       {currentUser ? <h4> Welcome, {currentUser.first_name} </h4> : ""}
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
