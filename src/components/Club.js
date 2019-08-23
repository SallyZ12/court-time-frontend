import React from 'react'
// import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import '../style.css'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {connect} from 'react-redux'
import {deleteCourt} from '../actions/deleteCourt'
// import Courts from '../components/Courts'


const Club = (props) => {
// console.log("props:", props)

let club = props.clubs.clubs[props.match.params.id-1]

// working on render only unique courts with rates by club

const handleDelete = (court) => {
  props.deleteCourt(court.id, court.club_id)
}



return (
<div>

<Container>
  <Row >
  <Col> Surface </Col>
  <Col> Prime </Col>
  <Col> Non-Prime </Col>
  </Row>
{club && club.courts.map(court => <span key={court.id}>
  <Row >
  <Col> {court.surface} </Col>
  <Col> {court.prime}</Col>
  <Col> {court.non_prime}</Col>
    </Row></span>)}
  <Card style={{ width: '45rem' }} >
    <Card.Body>

      <Card.Title> {club ? club.club_name : null} </Card.Title>
        <Card.Text className="courts">
        <br/>
     {club && club.courts.map(court => <li key={court.id}>
       Court: {court.court_number} <br/>{court.surface} <br/>
        
       <Button onClick={()=> handleDelete(court)}> Delete </Button><br/><Button> Reserve Court </Button></li> )}

       <br/><br/>
        </Card.Text>
    </Card.Body>
  </Card>
    <Button variant="light"><NavLink exact activeClassName="current" to={ club && `/clubs/${club.id}/courts`}> New Court</NavLink></Button>
</Container>
  </div>
  )
}
export default connect(null, {deleteCourt})(Club);
