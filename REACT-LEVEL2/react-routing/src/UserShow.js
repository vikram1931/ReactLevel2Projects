import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
const UserShow=(props)=>{
    const[user,setUser] = useState({})
    const {id} = props.match.params
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=>{
            const result = response.data
            setUser(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[id])
    return(<div>
<h1>{id}</h1>
<p>{user.name} -{user.email}-{user.address && user.address.city}</p>
<Link to="/users">Back</Link>
    </div>)
}
export default UserShow