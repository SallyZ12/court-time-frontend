import React from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../actions/fetchUsers'
import Users from '../components/Users'
import Signup from '../components/Signup'
import { Route, Link, NavLink} from 'react-router-dom'

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    return (
      <div>

      <Route exact path="/users" render={props => <Users users={this.props.users}/>}/>
      <br/>
      <Route exact path="/signup" component = {Signup} />
      <br/>
      </div>
    )
  }
}


const mapStateToProps = state => {
  // console.log("MSTP:", state.usersReducer)
  return {
    users: state.usersReducer
  }
}


export default connect(mapStateToProps, {fetchUsers})(UsersContainer)
