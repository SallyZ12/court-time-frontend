import React from 'react'

const Users = ({users}) => {
  console.log("users:", users)
  return (
  <div>
   Users
    </div>
  )
}

export default Users


// {users.map(user => <li key={user.id}>
//   {user.first_name} </li>)}
