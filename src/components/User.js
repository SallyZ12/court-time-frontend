import React from 'react'
import {Link} from 'react-router-dom'

const User = ({user}) => {
console.log("user:", user)
  return (
    <div>
    <p> Player Information </p>
    <br/>
    User
    <br/>
    {user && user.first_name}

    <Link to='/users'>Players</Link>
    </div>
  )
}

export default User;
