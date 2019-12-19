import React from 'react'
import '../style.css'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { NavLink, withRouter } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import {connect} from 'react-redux'
import {deleteCourt} from '../actions/deleteCourt'
import {deleteClub} from '../actions/deleteClub'
import ReservationInput from '../components/ReservationInput'
import moment from 'moment'


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

let admin1 = props.currentUser && props.currentUser.admin === "Yes"

const handleDeleteCourt = (court) => {
  props.deleteCourt(court.id, court.club_id)
}

const handleDeleteClub = (club) => {
  props.deleteClub(club.id)
  props.history.push("/")
}

function sortByDate(data) {
  return data.sort(function(a,b) {
    let dateA = a.day
    let dateB = b.day
      let dateSort = dateB.localeCompare(dateA)
          return dateSort
    })
}


return (

<div>

<Container className="justify-content-md-center">
<h3> {club ? club.club_name : null} - {club ? club.location : null} </h3>

{/*only admin can see New Court link*/}
{admin1 ? <NavLink exact activeClassName="current" to={`/clubs/${club.id}/courts`}> New Court -- </NavLink> : ""}

{/*only admin can see New Court link*/}
{admin1 ? <NavLink to= {`/clubs/${club.id}/edit`}> Edit Club Info -- </NavLink> : ""}

{/*only admin can see New Court link*/}
{admin1 ? <Button variant="link" onClick={()=> handleDeleteClub(club)}> Delete Club</Button> : ""}



  <Table striped bordered size="sm">
    <thead>
     <tr>
      <th> Surface </th>
      <th> Prime Rate </th>
      <th> Non-Prime Rate</th>
      </tr>
    </thead>
    <tbody>
      {unique && unique.map(court => <React.Fragment key={court.id}>
        <tr>
         <td> {court.surface}</td>
         <td> ${court.prime} </td>
         <td> ${court.non_prime} </td>
        </tr>
     </React.Fragment>
     )}
    </tbody>
  </Table>

</Container>

<Container>
      <br/><br/>
        <span className="courts">

          {club && club.courts.map(court => <li key={court.id}>

            Court:    {court.court_number} <br/>
                      {court.surface} <br/>
        <br/>

        <ReservationInput court = {court} currentUser = {props.currentUser} club = {props.clubs}/><br/>

        {sortByDate(court.court_res).map((reservation =>   <p key={reservation.id}>
        {moment(reservation.day).format('MMM DD YYYY')} <br/>{reservation.hour}</p>))}

        {/*only admin can see delete court link*/}
        {admin1 ? <Button variant="link" onClick={()=> handleDeleteCourt(court)}> Delete Court </Button> : ""} </li> )}
       </span>
</Container>

</div>
  )
}

const mapStateToProps = state => {
  return ({
    currentUser: state.currentUserReducer
  })
}

export default withRouter(connect(mapStateToProps, {deleteCourt, deleteClub})(Club));
