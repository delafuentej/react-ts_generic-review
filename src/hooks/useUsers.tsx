import axios from 'axios';
import  { useEffect, useRef, useState } from 'react';
import type{ ReqResUserListResponse, User } from '../interfaces';



const loadUsers= async(page: number=1): Promise<User[]> =>{
    try{
        const {data} = await axios.get<ReqResUserListResponse>('https://reqres.in/api/users',{
            params:{
                page:page
            }
        });
        return data.data;
        
    }catch(error){
        console.error(error);
        return[]
    }
};


const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(false);
  const currentPageRef = useRef(1);

   

    useEffect(()=>{
        const fetchUsers= async()=>{
            setIsLoading(true);
            const users = await loadUsers(currentPageRef.current);
            setUsers(users);
            setIsLoading(false);
        };
        fetchUsers();
     
      
        // fetch('https://reqres.in/api/users?page=2')
        // .then(res =>res.json())
        // .then( res=> console.log(res.data) );

    },[]);


    const nextPage= async()=>{
       currentPageRef.current++;
       setIsLoading(true);
       const users= await loadUsers(currentPageRef.current);
       if(users.length > 0){
        setUsers(users);
       }else{
        currentPageRef.current--;
       }
       setIsLoading(false);
    };
    
    const prevPage = async()=>{
        if (currentPageRef.current < 1) return;

        currentPageRef.current--;
        setIsLoading(true);
        const users = await loadUsers(currentPageRef.current);
        setUsers(users);
        setIsLoading(false);
    }


  return {
   //properties
   users,
   isLoading,
   currentPageRef,

   //methods
   nextPage,
   prevPage

  }
}

export default useUsers;
