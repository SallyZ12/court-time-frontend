import React from 'react'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';


const Club = (props) => {
console.log("props:", props )

let club = props.clubs.clubs[props.match.params.id-1]

return (
  <Card style={{ width: '35rem' }}>
    <Card.Body>
      <Card.Title> Club:   {club ? club.club_name : null} </Card.Title>
        <Card.Text>
         <br/>
            Courts: <br/><br/>
        </Card.Text>
          <Button variant="light"><Link to='/clubs'>Clubs</Link></Button>
    </Card.Body>
  </Card>
  )
}

export default Club;
