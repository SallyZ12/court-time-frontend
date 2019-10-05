import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Logout from '../components/Logout'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

const NavBar =  ({ currentUser}) => {
  
let admin1 = currentUser && currentUser.admin === "Yes"

  return (
    <div className="NavBar">
       {Object.keys(currentUser).length !== 0 ? <Logout/> : ""}
       {Object.keys(currentUser).length !== 0 ? <h4> Welcome, {currentUser.first_name} </h4> : "" }
       {Object.keys(currentUser).length !== 0 ? <p> <Link exact='true' to={`/users/${currentUser.id}`}>Reservations</Link></p> :""  }

       {Object.keys(currentUser).length !== 0 && admin1 ? <DropdownButton id="dropdown-basic-button" title="Admin">
       <Dropdown.Item href = {currentUser && admin1 ? "/clubs": null}>New Club </Dropdown.Item>
       <Dropdown.Item href = {currentUser && admin1 ? "/users": null}>Players </Dropdown.Item>
       </DropdownButton> : ""}

    </div>
  )
}


const mapStateToProps = (state) => {

  return {
    currentUser: state.currentUserReducer
  }
}

export default connect(mapStateToProps)(NavBar)


// <div className="NavBar">
//    {Object.keys(currentUser).length !== 0 ? <Logout/> : ""}
//    {Object.keys(currentUser).length !== 0 ? <h4> Welcome, {currentUser.first_name} </h4> : "" }
//    {Object.keys(currentUser).length !== 0 ? <p> <Link exact='true' to={`/users/${currentUser.id}`}>Reservations</Link></p> :""  }
// </div>
