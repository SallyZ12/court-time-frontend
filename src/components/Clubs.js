import React from 'react'
import {Link} from 'react-router-dom'

const Clubs = ({clubs}) => {
// console.log("clubs", clubs)
return (

  <div>

  {clubs.clubs && clubs.clubs.map(club =>
    <li key={club.id}>
    <Link to={`/clubs/${club}`}> {club.club_name} - {club.location} </Link>
    </li>)}
  </div>
  )
}

export default Clubs
