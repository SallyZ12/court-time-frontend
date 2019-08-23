import React from 'react'

import {connect} from 'react-redux'

const Reservation = ({reservations, clubs}) => {

const currentUserReservations = reservations && reservations.reservations
const currentUser = reservations && reservations
console.log("reservations:",currentUserReservations)
console.log("clubs", clubs)
console.log("currentUser:", currentUser)

return (
  <div>
  <h5> {currentUser && currentUser.first_name}'s Reservation History </h5>
  {currentUserReservations && currentUserReservations.map(currentUserReservation=>
  <p key={currentUserReservation.id}>
  Date: {currentUserReservation.day} - ConfirmID: {currentUserReservation.confirmID}
    </p>)}
  </div>
)
}

export default connect(null)(Reservation)
