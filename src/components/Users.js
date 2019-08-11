import React from 'react'
import {Link} from 'react-router-dom'
import User from './User'

const Users = ({users}) => {
 console.log("users:", users)
return (

 <div>
 <h3> Player List </h3>
 {users.users && users.users.map(user => <li key={user.id}> <Link to={`/users/${user.id}`}>
    {user.first_name} - {user.last_name}</Link></li>)}
   </div>
 )
}

export default Users
