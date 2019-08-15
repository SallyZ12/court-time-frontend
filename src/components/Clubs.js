import React from 'react'
import {Link} from 'react-router-dom'
import '../style.css';

const Clubs = ({clubs}) => {

console.log("clubs", clubs)
return (

  <div className = "Clubs">

  {clubs.clubs && clubs.clubs.map(club =>
    <p key={club.id}>
    <Link to={`/clubs/${club.id}`}> {club.club_name} - {club.location} - {club.courts.length} Courts </Link><br/>
    </p>)}

  </div>
  )
}

export default Clubs
