import React from 'react'

const User = ({ name, image }) => (
  <li>{name} <img src={image}/></li>
)

export default User;
