import React from 'react'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';


const Club = (props) => {
// console.log("props:", props )

let club = props.clubs.clubs[props.match.params.id-1]

return (
  <Card style={{ width: '35rem' }}>
    <Card.Body>
      <p> Please Register or Login to Reserve a Court</p>
      <Card.Title> Club:   {club ? club.club_name : null} </Card.Title>
        <Card.Text>
         <br/>
            Court: <br/><br/>

          {club && club.courts.map(court => <li key={court.id}>
            {court.court_number} - {court.surface} - Prime Rate:${court.prime} - Non-Prime Rate: ${court.non_prime}</li>)}

        </Card.Text>
          <Button variant="light"><Link to='/clubs'>Clubs</Link></Button>
    </Card.Body>
  </Card>

  )
}

export default Club;
