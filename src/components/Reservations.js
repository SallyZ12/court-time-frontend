import React from 'react'

import {connect} from 'react-redux'

const Reservations = ({currentUserRes, clubs}) => {

console.log("clubs:", clubs)
console.log("currentUserRes:", currentUserRes)

const currentUserReservations = currentUserRes && currentUserRes.reservations
const currentUser = currentUserRes && currentUserRes
// console.log("reservations:",currentUserReservations)
// console.log("clubs", clubs)
// console.log("currentUser:", currentUser)

return (
  <div>
  <h5> {currentUser && currentUser.first_name} </h5>
  {currentUserReservations && currentUserReservations.map(currentUserReservation=>
  <p key={currentUserReservation.id}>
  ConfirmID: {currentUserReservation.confirmID} Date: {currentUserReservation.day}
    </p>)}
  </div>
)
}

export default connect(null)(Reservations)
