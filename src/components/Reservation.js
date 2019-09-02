import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'

const Reservation = (props) => {
console.log("reservation:", props)

  let reservation =  props.currentUser && props.currentUser.reservations[props.match.params.id-1]
  


return (
  <div>

  Player: {props.currentUser ? props.currentUser.first_name : null} {props.currentUser ? props.currentUser.last_name : null}<br/>
  ConfirmID: {reservation ? reservation.confirmID : null} <br/>
  Date: {reservation ? moment(reservation.day).format('MMM DD YYYY') : null} <br/>
  Time: {reservation ?  reservation.hour : null}
  </div>
)

}

export default connect(null)(Reservation)
