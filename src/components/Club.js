import React from 'react'
// import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import '../style.css'
import CourtsContainer from '../containers/CourtsContainer'
// import Button from 'react-bootstrap/Button';


const Club = (props) => {
// console.log("props:", props )

let club = props.clubs.clubs[props.match.params.id-1]
// let club = props.clubs.filter(club => club.id === props.match.params.id)[0]
// console.log("club:", club)


return (
<div>
  <CourtsContainer club={club}/>
  <br/>
  <br/>
  <Card style={{ width: '35rem' }} >
    <Card.Body>
      <p> Please Register or Login to Reserve a Court</p>
      <Card.Title> Club:   {club ? club.club_name : null} </Card.Title>
        <Card.Text className="courts">
         <br/>
          {club && club.courts.map(court => <li key={court.id}>
            Court: {court.court_number} <br/> Surface: {court.surface} <br/> Prime: ${court.prime} <br/>   Non-Prime: ${court.non_prime} <br/><br/></li> )}
            <br/><br/>
        </Card.Text>
    </Card.Body>
  </Card>

  </div>
  )
}
export default Club;
