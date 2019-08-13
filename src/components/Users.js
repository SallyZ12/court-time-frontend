import React from 'react'
import {Link} from 'react-router-dom'
import Table from 'react-bootstrap/Table'
// import User from './User'


const Users = ({users}) => {
 // console.log("users:", users)
return (


  <Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th>Name</th>
      </tr>
    </thead>
      <tbody>
    <tr>
      <td> {users.users && users.users.map(user => (
      <Link to={`/users/${user.id}`}> <li> {user.first_name} {user.last_name} </li></Link>))} </td>      
    </tr>
    </tbody>
    </Table>
  )
}
export default Users


// <Table striped bordered hover size="sm">
//   <thead>
//     <tr>
//       <th>#</th>
//       <th>First Name</th>
//       <th>Last Name</th>
//       <th>Username</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>1</td>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <td>2</td>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <td>3</td>
//       <td colSpan="2">Larry the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>
// </Table>

// <Link to={`/users/${user.id}`}>
//   {user.first_name} {user.last_name}</Link></ul>)}
