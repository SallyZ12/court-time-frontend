import React from 'react'
import {Link} from 'react-router-dom'

const User = ({user}) => {
console.log("user:", user)
  return (
    <div>
    <Link to='/users'>Players</Link>
    {user && user.first_name}
    </div>
  )
}

export default User;
