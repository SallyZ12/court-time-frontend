import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import {deleteReservation} from '../actions/deleteReservation'
import Button from 'react-bootstrap/Button';


const Reservation = (props) => {

  // not using below since retrieves id of reservation and not good when delete so use
  // index instead
  // let reservation =  props.currentUser && props.currentUser.reservations[props.match.params.id-1]

  //The following allows you to find a reservation through a link where a reservation is deleted or the
  // sequence of reservation.ids is not in order since various currentUsers will book reservations.
  // reservation.id returns an integer, props.match.params.id returns string
  let reservation = props.currentUser.reservations && props.currentUser.reservations.filter(reservation => reservation.id == props.match.params.id)[0]


const handleDeleteReservation = (reservation) => {
  props.deleteReservation(reservation.user_id, reservation.id)
  props.history.push(`/users/${reservation.user_id}`)

}


return (
  <div>
  Player: {props.currentUser ? props.currentUser.first_name : null} {props.currentUser ? props.currentUser.last_name : null}<br/>
  <br/>
  Club: {reservation ? reservation.reservation_club : null}<br/>
  ConfirmID: {reservation ? reservation.confirmID : null} <br/>
  Date: {reservation ? moment(reservation.day).format('MMM DD YYYY') : null} <br/>
  Time: {reservation ?  reservation.hour : null} <br/>
  Court Number: {reservation ? reservation.res_court_number : null}<br/>
  Surface: {reservation ? reservation.res_court_surface : null}
 <br/><br/>
  <Button variant="link" onClick={()=> handleDeleteReservation(reservation)} > Cancel Reservation </Button>

  </div>
)
}


export default connect(null, {deleteReservation})(Reservation)
