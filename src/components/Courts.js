import React from 'react'
import {connect} from 'react-redux'
import {deleteCourt} from '../actions/deleteCourt'
import Button from 'react-bootstrap/Button';

const Courts = ({club}) => {

const handleDelete = (court) => {
  club.deleteCourt(court.id, court.club_id)
}

  return (
    <div>
    {club.club.courts && club.club.courts.map(court =>
    <li key={court.id}>
    {court.court_number} - {court.surface} - {court.prime} - {court.non_prime}<br/>
    <Button onClick={()=> handleDelete(court)}> Delete </Button><br/></li>
  )}
  </div>
  )
}

export default connect(null, {deleteCourt})(Courts)
