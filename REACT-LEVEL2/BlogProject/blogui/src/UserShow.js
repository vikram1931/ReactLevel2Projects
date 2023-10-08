import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const UserShow=(props)=>{
    const {id} = props.match.params
    
    const [user,setuser] = useState({})
    const [postsdata,setpostsdata] = useState([])

    
    useEffect(()=>{
    
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response)=>{
            const result1 = response.data
            setpostsdata(result1)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[id])
    useEffect(()=>{

        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=>{
            const result = response.data
            setuser(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[id])

    return(<div>
<h1> USERNAME: {user.name}</h1>
<div>
{
postsdata.map((postdata,i)=>{
    return ( <li key={i}>{postdata.title}</li>)
})
}
</div>
<Link to="/users">Back</Link>
    </div>)
}

export default UserShow