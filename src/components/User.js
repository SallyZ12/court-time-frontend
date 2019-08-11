import React from 'react'
import {Link} from 'react-router-dom'

const User = (props) => {
// console.log("props:",props )

let user = props.users.users[props.match.params.id-1]

  return (
    <div>
    <h3> Player Information </h3>
    <br/>
    {user ? user.first_name : null} {user ? user.last_name : null} <br/>
    Admin: {user ? user.admin : null}
    <br/>
    <br/>
    <Link to='/users'>Players</Link>
    </div>
  )
}

export default User;
