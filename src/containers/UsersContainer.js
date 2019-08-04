import React from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../actions/fetchUsers'
import Users from '../components/Users'
import UserInput from '../components/UserInput'

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    return (
      <div>
      <Users users={this.props.users}/>
      <br/>
      <UserInput />
      </div>
    )
  }
}


const mapStateToProps = state => {
  // console.log("MSTP:", state.userReducer)
  return {
    users: state.userReducer
  }
}


export default connect(mapStateToProps, {fetchUsers})(UsersContainer)
