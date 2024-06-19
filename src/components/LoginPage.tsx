import React, { useEffect } from 'react'
import { useAuthStore } from '../store/auth.store'


const LoginPage = () => {
        const authStatus= useAuthStore( state => state.status);
        const user = useAuthStore( state => state.user);
        console.log('user', user);
        const login= useAuthStore( state => state.login);
        console.log('login', login);
        const logout= useAuthStore( state => state.logout);
        console.log('logout',logout)


    useEffect(()=>{
        setTimeout(()=>{
            logout();
        },1500)

    },[]);


        if (authStatus === 'checking'){
            <h3>Loading...</h3>
        }

  return (
    <>
        <h3>Login Page</h3>
        {(authStatus === 'authenticated') ? <div>Authenticate: {JSON.stringify(user, null, 2)}</div> : <div>User Not Authenticated</div>}
        {(authStatus === 'authenticated') ? <button onClick={()=>logout()}>Logout</button> : <button onClick={()=>login('xxxx@gmail.com', '123')}>Login</button>}
    </>
  )
}

export default LoginPage
