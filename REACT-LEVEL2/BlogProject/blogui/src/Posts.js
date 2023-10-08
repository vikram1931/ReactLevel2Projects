import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Posts=(props)=>{
const [posts, setposts] = useState([])

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
        const re = response.data
        setposts(re)

    })
    .catch((err)=>{
        alert(err.response)
    })
},[])

    return(<div>
       <h1>Total Posts: {posts.length}</h1> 
       {
           posts.map((post,i)=>{
               return <li key={i}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
           })
       }

    </div>)
}

export default Posts