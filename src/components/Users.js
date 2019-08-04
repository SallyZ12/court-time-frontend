import React from 'react'

const Users = ({users}) => {
  // console.log("users:", users)
return (

  <div>
  <h3> Player List </h3>
  {users.users.map(user => <p key={user.id}>
    {user.first_name} {user.last_name},  Admin: {user.admin}</p>)}
    </div>
  )
}

export default Users
