import React from 'react'

const Users = ({users}) => {
  console.log("users:", users)
  return (
  <div>
    <p> Name  --------  ADMIN</p>
  {users.users.map(user => <li key={user.id}>
    {user.first_name} - {user.last_name} - {user.admin}</li>)}
    </div>
  )
}

export default Users
