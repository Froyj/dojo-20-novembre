import React from 'react'
import User from './User'

const UserList = ({ users }) => (
  <ul>{users.map(user => (
    <User {...user}/>
  ))}
  </ul>
)

export default UserList
