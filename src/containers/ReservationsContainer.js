import React from 'react'
import {connect} from 'react-redux'
import { Route } from 'react-router-dom'
import ReservationInput from '../components/ReservationInput'
import Reservation from '../components/Reservation'

class ReservationsContainer extends React.Component {


  render() {
    return (
      <div>
      <Route exact path="/users/:id/reservations" render ={() => <ReservationInput currentUser = {this.props.currentUser} clubs={this.props.clubs}/>}/>
      <Route exact path="/reservations/:id" render = {(routerProps) => <Reservation {...routerProps} currentUser = {this.props.currentUser}/>}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
  currentUser: state.currentUserReducer,
  clubs: state.clubsReducer
})
}


export default connect(mapStateToProps)(ReservationsContainer)
