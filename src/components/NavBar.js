import React from 'react'
import { connect } from 'react-redux'

const NavBar =  ({ currentUser }) => {
// console.log("currentUser:", currentUser)
  return (
    <div className="NavBar">
      {currentUser ? <h3> Welcome, {currentUser.first_name} </h3> : ""}
    </div>
  )
}


const mapStateToProps = state => {

  return {
    currentUser: state.currentUserReducer
  }
}

export default connect(mapStateToProps)(NavBar)
