import React from 'react'
import {Link} from 'react-router-dom'


const Users = ({users}) => {
 // console.log("users:", users)

return (

  <div>
    <h5> Players - Count: {users.users.length} </h5>
     {users.users && users.users.map(user =>
      <p key={user.id}>
      <Link to={`/users/${user.id}`}> {user.first_name} {user.last_name}</Link>
    </p>)}
    </div>
  )
}
export default Users
