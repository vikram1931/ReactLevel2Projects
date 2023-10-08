import React,{useState,useEffect} from 'react'
import axios from 'axios'
const Account =()=>{
    const [user,setuser]= useState({})
    useEffect(()=>{
axios.get('http://dct-user-auth.herokuapp.com/users/account',{
    headers:{
        'x-auth':localStorage.getItem('token')
    }
})
.then((response)=>{
    setuser(response.data)
})
.catch((err)=>{
    console.log(err.message)
})
    },[])
    return (<div>
<h1> account component</h1>

<p> {user.email}</p>
<p>{user.username}</p>
    </div>)
}

export default Account