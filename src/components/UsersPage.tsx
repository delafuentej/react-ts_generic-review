// import React, {useEffect, useRef, useState} from 'react';
// import axios from 'axios';
// import type{ ReqResUserListResponse,User } from '../interfaces';
 import useUsers from '../hooks/useUsers';
import UserRow from './UserRow';


// const loadUsers= async(page: number=1): Promise<User[]> =>{
//     try{
//         const {data} = await axios.get<ReqResUserListResponse>('https://reqres.in/api/users',{
//             params:{
//                 page:page
//             }
//         });
//         return data.data;
        
//     }catch(error){
//         console.error(error);
//         return[]
//     }
// };

export const UsersPage = () => {

    const{users, isLoading, currentPageRef, prevPage, nextPage} = useUsers()
//     const [users, setUsers] = useState<User[]>([]);
//     const [isLoading, setIsLoading] = useState(false);
//   const currentPageRef = useRef(1);

   

//     useEffect(()=>{
//         const fetchUsers= async()=>{
//             setIsLoading(true);
//             const users = await loadUsers(currentPageRef.current);
//             setUsers(users);
//             setIsLoading(false);
//         };
//         fetchUsers();
     
      
        // fetch('https://reqres.in/api/users?page=2')
        // .then(res =>res.json())
        // .then( res=> console.log(res.data) );

    // },[]);


    // const nextPage= async()=>{
    //    currentPageRef.current++;
    //    setIsLoading(true);
    //    const users= await loadUsers(currentPageRef.current);
    //    if(users.length > 0){
    //     setUsers(users);
    //    }else{
    //     currentPageRef.current--;
    //    }
    //    setIsLoading(false);
    // };
    
    // const prevPage = async()=>{
    //     if (currentPageRef.current < 1) return;

    //     currentPageRef.current--;
    //     setIsLoading(true);
    //     const users = await loadUsers(currentPageRef.current);
    //     setUsers(users);
    //     setIsLoading(false);
    // }


  return (
    <>
    <h3>Users</h3>
    {isLoading ? (
        <p>Loading... </p>

    ): (
        <table>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>

            </thead>
            <tbody>
                {users.map( user =>(
                    <UserRow 
                        key={user.id}
                        user={user}
                    />
                    //  <tr key={user.id}>
                    //     <td><img src={user.avatar}  alt={user.first_name}/></td>
                    //     <td>{user.first_name} {user.last_name}</td>
                    //     <td>{user.email}</td>
                    
                    //  </tr>
                ))}
            

            </tbody>
        </table>

    )}
    
    {/* pagination */}
    <div>
        <button onClick={prevPage} disabled={(currentPageRef.current === 1) ? true: false}>Prev</button>
        <button onClick={ nextPage} disabled={(currentPageRef.current === 2) ? true: false}>Next</button>
    </div>
  
    
    </>
  )
}
