import React from 'react';
import Login from './components/Login'
import Logout from './components/Logout'
import { getCurrentUser } from './actions/currentUser'
import { connect } from 'react-redux'
import NavBar from './components/NavBar'
import UsersContainer from './containers/UsersContainer'
import Users from './components/Users'
import { Route, Switch, Link } from 'react-router-dom'


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }


  render () {
    return (
      <div className="App">

      <h2> Court Time </h2>
      <br/>
      <NavBar />
      <br/>
      <UsersContainer />
      <br/>
      <Login  />
      <br/>
      <Logout />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("MSTP-APP:", state.usersReducer)
  return ({
    loggedIn: !!state.currentUserReducer,
    users: state.usersReducer
  })
}



export default connect(mapStateToProps, { getCurrentUser, Users })(App);
