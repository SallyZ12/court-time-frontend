import React from 'react';
import UsersContainer from './containers/UsersContainer'
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'
import ClubInput from './components/ClubInput'
import CourtInput from './components/CourtInput'
import Reservations from './components/Reservations'
import ReservationInput from './components/ReservationInput'
import NavBar from './components/NavBar'
import { getCurrentUser } from './actions/currentUser'
import { fetchUsers } from './actions/fetchUsers'
import {fetchClubs} from './actions/fetchClubs'
import { connect } from 'react-redux'
import { Route, Redirect, NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import './style.css';

import ClubsContainer from './containers/ClubsContainer'


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
    this.props.fetchUsers()
    this.props.fetchClubs()
  }


  render () {
    // console.log(this.props.loggedIn)
    const { currentUser} = this.props

    let admin1 = currentUser && currentUser.admin === "Yes"

    return (
      <div className="navmenu">

      <br/>
      <Button variant="light"><NavLink exact activeClassName="current" to="/home"> Home  </NavLink></Button>
      <Button variant="light"><NavLink exact activeClassName="current" to="/users"> Players </NavLink></Button>
      <Button variant="light"><NavLink exact activeClassName="current" to="/signup"> Register </NavLink></Button>
      <Button variant="light"><NavLink exact activeClassName="current" to="/login"> Login </NavLink></Button>
      {/*<Button variant="light"><NavLink exact activeClassName="current" to="/clubs" > New Club </NavLink></Button>*/}
      <Button variant="light"><NavLink exact activeClassName="current" to={currentUser && admin1 ? "/clubs" : '/'}> New Club</NavLink></Button>

      <br/>
      <br/>
      <NavBar />
      <br/>
      <Route exact path = '/' render = {()=> <Redirect to='/home'/>}/>
      <Route exact path = '/home' render = {() => <Home home = {this.props.clubs}/>} />
      <Route exact path = '/clubs' render ={() => <ClubInput clubInput = {this.props.club}/>} />
      <Route exact path = '/clubs/:id/courts' component = {CourtInput}/>
      <Route exact path="/login" component = {Login} />
      <Route exact path="/users/:id/reservations" render ={() => <ReservationInput reservationInput = {this.props.currentUser}/>}/>

      <br/>
      <UsersContainer/>
      <ClubsContainer/>
      
      {/*<Reservations currentUserRes = {this.props.currentUser} clubs={this.props.clubs}/>*/}
      <Logout/>
      </div>
    );
  }
}

const mapStateToProps = state => {

  // console.log("MSTP-APP:", state.currentUserReducer)

  return ({
    loggedIn: !!state.currentUserReducer,
    currentUser: state.currentUserReducer,
    users: state.usersReducer,
    clubs: state.clubsReducer
  })
}



export default connect(mapStateToProps, { getCurrentUser, fetchUsers, fetchClubs})(App);
