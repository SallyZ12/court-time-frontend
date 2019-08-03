import React from 'react'
import { connect } from 'react-redux'

const NavBar =  ({ currentUser }) => {

  return (
    <div className="NavBar">
      {currentUser ? <strong> Welcome, {currentUser.first_name} </strong> : ""}
    </div>
  )
}


const mapStateToProps = state => {

  return {
    currentUser: state.currentUserReducer
  }
}

export default connect(mapStateToProps)(NavBar)
