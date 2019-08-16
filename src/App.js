import React from 'react';
import Login from './components/Login'
import Logout from './components/Logout'
import { getCurrentUser } from './actions/currentUser'
import { fetchUsers } from './actions/fetchUsers'
import {fetchClubs} from './actions/fetchClubs'
import { connect } from 'react-redux'
import NavBar from './components/NavBar'
import UsersContainer from './containers/UsersContainer'
import ClubsContainer from './containers/ClubsContainer'
import Home from './components/Home'
import { Route, Redirect, NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import './style.css';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
    this.props.fetchUsers()
    this.props.fetchClubs()
  }


  render () {
    return (
      <div className="navmenu">

      <br/>
      <Button variant="light"><NavLink exact activeClassName="current" to="/home"> Home  </NavLink></Button>
      <Button variant="light"><NavLink exact activeClassName="current" to="/users"> Players </NavLink></Button>
      <Button variant="light"><NavLink exact activeClassName="current" to="/signup"> Register </NavLink></Button>
      <Button variant="light"><NavLink exact activeClassName="current" to="/login"> Login </NavLink></Button>
      <Button variant="light"><NavLink exact activeClassName="current" to="/logout"> Logout </NavLink></Button>
      <br/>
      <br/>
      <NavBar />
      <br/>
      <Route exact path = '/' render = {()=> <Redirect to='/home'/>}/>
      <Route exact path = '/home' render = {() => <Home home = {this.props.clubs}/>} />
      <Route exact path="/login" component = {Login} />
      <Route exact path="/logout" component = {Logout} />
      <br/>
      <ClubsContainer/>
      <UsersContainer/>

      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("MSTP-APP:", state.usersReducer)
  return ({
    loggedIn: !!state.currentUserReducer,
    users: state.usersReducer,
    clubs: state.clubsReducer
  })
}



export default connect(mapStateToProps, { getCurrentUser, fetchUsers, fetchClubs})(App);


  // <Logout/>
