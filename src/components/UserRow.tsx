import React from 'react'
import type{ User } from '../interfaces';
interface Props {
    user: User;
}


const UserRow = ({user}: Props) => {
    const {avatar, first_name, last_name, email}= user;
  return (
    
          <tr>
                 <td><img src={avatar}  alt={first_name}/></td>
                 <td>{first_name} {last_name}</td>
                 <td>{email}</td>
                 
            </tr>
    
  )
}

export default UserRow;
