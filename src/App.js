import React from 'react';
import Home from './components/Home'
import Login from './components/Login'
import CourtInput from './components/CourtInput'
import NavBar from './components/NavBar'
import UsersContainer from './containers/UsersContainer'
import ClubsContainer from './containers/ClubsContainer'
import ReservationsContainer from './containers/ReservationsContainer'
import { getCurrentUser } from './actions/currentUser'
import { fetchUsers } from './actions/fetchUsers'
import {fetchClubs} from './actions/fetchClubs'
import { connect } from 'react-redux'
import { Route, Redirect, NavLink, Switch } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import './style.css';


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
    this.props.fetchUsers()
    this.props.fetchClubs()
  }


  render () {
    // console.log("curentUser:",this.props.clubs)
    const { currentUser} = this.props

    let admin1 = currentUser && currentUser.admin === "Yes"

    return (
      <div className="navmenu">

      <Button variant="light"><NavLink exact activeClassName="current" to="/home"> Home  </NavLink></Button>
      <Button variant="light"><NavLink exact activeClassName="current" to="/signup"> Register </NavLink></Button>
      <Button variant="light"><NavLink exact activeClassName="current" to="/login"> Login </NavLink></Button>


      <DropdownButton id="dropdown-basic-button" title="Admin">
      <Dropdown.Item href = {currentUser && admin1 ? "/clubs": null}>New Club </Dropdown.Item>
      <Dropdown.Item href = {currentUser && admin1 ? "/users": null}>Players </Dropdown.Item>
      </DropdownButton>


      <NavBar />
      <br/>
      <Switch>
      <Route exact path = '/' render = {()=> <Redirect to='/home'/>}/>
      <Route exact path = '/home' render = {() => <Home home = {this.props.clubs}/>}/>
      <Route exact path = '/clubs/:id/courts' component = {CourtInput}/>
      <Route exact path="/login" component = {Login} />

      </Switch>
      <br/>
      <ReservationsContainer/>
      <UsersContainer/>
      <ClubsContainer/>

      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("MSTP-APP:", state.clubsReducer)
  return ({
    loggedIn: !!state.currentUserReducer,
    currentUser: state.currentUserReducer,
    users: state.usersReducer,
    clubs: state.clubsReducer
  })
}



export default connect(mapStateToProps, { getCurrentUser, fetchUsers, fetchClubs})(App);
