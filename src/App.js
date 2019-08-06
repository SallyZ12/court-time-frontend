import React from 'react';
import Signup from './components/Signup'
import Login from './components/Login'
import Logout from './components/Logout'
import { getCurrentUser } from './actions/currentUser'
import { fetchUsers } from './actions/fetchUsers'
import { connect } from 'react-redux'
import NavBar from './components/NavBar'
// import UsersContainer from './containers/UsersContainer'
import Users from './components/Users'
import { Route, Switch, Link, NavLink } from 'react-router-dom'


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
    this.props.fetchUsers()
  }


  render () {
    return (
      <div className="App">

      <h2> Court Time </h2>
      <br/>
      <NavBar />
      <br/>
      <Route exact path="/users" render={props => <Users users={this.props.users}/>}/>
      <Route exact path="/login" component = {Login} />

      <br/>
      <Signup />
      <br/>
      <Logout/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("MSTP-APP:", state.usersReducer)
  return ({
    loggedIn: !!state.currentUserReducer,
    users: state.usersReducer
  })
}



export default connect(mapStateToProps, { getCurrentUser, fetchUsers })(App);
