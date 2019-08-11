import React from 'react'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';


const User = (props) => {
// console.log("props:",props )

let user = props.users.users[props.match.params.id-1]

  return (
    <Card style={{ width: '18rem' }}>
      {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
      <Card.Body>
        <Card.Title>Player Information</Card.Title>
        <Card.Text>
        {user ? user.first_name : null} {user ? user.last_name : null} <br/>
        Admin: {user ? user.admin : null}
        </Card.Text>
        <Button variant="light"><Link to='/users'>Players</Link></Button>
      </Card.Body>
    </Card>

  )
}

export default User;
