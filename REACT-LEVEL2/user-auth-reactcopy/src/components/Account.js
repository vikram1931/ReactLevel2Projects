import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Account=()=>{

    const [user,setuser] = useState({})

    useEffect(()=>{
axios.get('http://dct-user-auth.herokuapp.com/users/account',{
    headers :{
        'x-auth': localStorage.getItem('token')
    }
})
.then((response)=>{
    const result = response.data
    setuser(result)

})
.catch((err)=>{
    console.log(err.message)
})
    },[])

    return(<div>
<h1>Account page</h1>

<p>Email-{user.email}</p>
<p>username-{user.username}</p>
    </div>)
}

export default Account