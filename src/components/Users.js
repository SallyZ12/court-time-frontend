import React from 'react'
import {Link} from 'react-router-dom'
import Table from 'react-bootstrap/Table'
// import User from './User'


const Users = ({users}) => {
 // console.log("users:", users)
return (


  <Table responsive>
    <thead>
      <tr>
        <th>Name</th>
      </tr>
    </thead>
      <tbody>
    <tr>
      <td> {users.users && users.users.map(user => <> <Link key={user.id}
      to={`/users/${user.id}`}> {user.first_name} {user.last_name}</Link> <br/> </>)} </td>
    </tr>
    </tbody>
    </Table>
  )
}
export default Users
