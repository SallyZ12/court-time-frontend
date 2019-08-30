import React from 'react'
// import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import '../style.css'
import Button from 'react-bootstrap/Button';
import { NavLink, withRouter } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {connect} from 'react-redux'
import {deleteCourt} from '../actions/deleteCourt'
import {deleteClub} from '../actions/deleteClub'
import ReservationInput from '../components/ReservationInput'
// import Courts from '../components/Courts'


const Club = (props) => {
// console.log("props:", props)


let club = props.clubs.clubs[props.match.params.id-1]
// console.log ("club:", club)

// this is how I iterate and not repeat court surfaces with rates
let courts = club && club.courts
const unique = Array.from(new Set(courts && courts.map(s => s.surface)))
  .map(surface => {
    return {
      id: courts.find(s=> s.surface === surface).id,
      surface: surface,
      prime: courts.find(s=> s.surface === surface).prime,
      non_prime: courts.find(s=> s.surface === surface).non_prime
    }
  })


const handleDelete = (court) => {
  props.deleteCourt(court.id, court.club_id)
}

const handleDeleteClub = (club) => {
  props.deleteClub(club.id)
  props.history.push("/")
}


return (
  <div>

<Container>
  <Row >
  <Col sm={2.0}> Surface </Col>
  <Col sm={2.0}> Prime </Col>
  <Col sm={2.5}> Non-Prime </Col>
  </Row>
  {unique && unique.map(court => <span key={court.id}>
  <Row >
  <Col sm={2.0}> {court.surface} </Col>
  <Col sm={2.0}> ${court.prime}</Col>
  <Col sm={2.0}> ${court.non_prime}</Col>
    </Row></span>)}
</Container>

  <Card style={{ width: '45rem' }} >
    <Card.Body>

      <Card.Title> {club ? club.club_name : null}   </Card.Title>
      <Button variant="link" onClick={()=> handleDeleteClub(club)}> Delete Club</Button>
        <Card.Text className="courts">
        <br/>
     {club && club.courts.map(court => <li key={court.id}>
       Court: {court.court_number} <br/>{court.surface}
       <br/><br/>

       <ReservationInput courtId = {court.id} currentUser = {props.currentUser}/><br/>

       <Button variant="link" onClick={()=> handleDelete(court)}> Delete Court</Button></li>)}
        </Card.Text>

    </Card.Body>
  </Card>

    <Button variant="light"><NavLink exact activeClassName="current" to={club ? `/clubs/${club.id}/courts`: '/'   }> New Court</NavLink></Button>

    </div>
  )
}

const mapStateToProps = state => {
  return ({
    currentUser: state.currentUserReducer
  })
}


export default withRouter(connect(mapStateToProps, {deleteCourt, deleteClub})(Club));
