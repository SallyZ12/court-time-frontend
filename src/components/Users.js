import React from 'react'
import {Link} from 'react-router-dom'
// import User from './User'


const Users = ({users}) => {
 // console.log("users:", users)
return (

  <div>
  <h3> Player List </h3>
  <br/>
    {users.users && users.users.map(user => <ul key={user.id}>
      <Link to={`/users/${user.id}`}>
        {user.first_name} {user.last_name}</Link></ul>)}
  </div>
  )
}
export default Users
