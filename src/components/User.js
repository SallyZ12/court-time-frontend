import React from 'react'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button';
import moment from 'moment'


const User = (props) => {
// console.log("props:", props )

let user = props.users.users[props.match.params.id-1]


// need help here
// let club = props.clubs.clubs[props.match.params.id-1]
// console.log("club:", club)

// steps to accessing today's date
let date = new Date()
let currentDate = moment(date).format('MMM DD YYYY')

// working on this sort for sorting most recent reservation first
// function sortByDate(data) {
//   data.sort(function(a,b) {
//     let dateA = a.day
//       let dateB = b.day
//       let dateSort = dateA.localeCompare(dateB)
//         if(dateSort !== 0){
//           return dateSort
//         }
//   })
// }


  return (
    <Card style={{ width: '35rem' }}>
      {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
      <Card.Body>
        <Card.Title> Today's Date: {currentDate} <br/><br/> Player Information </Card.Title>
        <Card.Text>
         <br/>
        Name: {user ? user.first_name : null} {user ? user.last_name : null} <br/>
        username: {user ? user.username : null} <br/>
        email: {user ? user.email : null} <br/>
        Admin: {user ? user.admin : null} <br/>
        Reservation Count: {user ? user.reservations.length : null}<br/><br/>
        Reservations <br/>
            {user && user.reservations.map(reservation => ( <li> <Link  key={reservation.id}
             to={`/reservations/${reservation.id}`}>
             ConfirmID:{reservation.confirmID}: </Link>
             {moment(reservation.day).format('MMM DD YYYY')} -
             {reservation.hour} -
             {reservation.reservation_club}-
             id: {reservation.id}  <br/></li> ))}
        </Card.Text>
        {/*<Button variant="light"><Link to='/users'>Players</Link></Button>*/}
      </Card.Body>
    </Card>
  )
}

export default User;

// {user && sortByDate(user.reservations).map(reservation => <li key={reservation.id}>
