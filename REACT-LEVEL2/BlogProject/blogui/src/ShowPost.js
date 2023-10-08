import React,{useState,useEffect} from 'react'
import axios from 'axios'

const ShowPost =(props)=>{
    const {id} = props.match.params
    const [username,setusername] = useState({})
    const [post,setpost] =useState({})
    const [userid,setuserid] =useState('')
    const [comment,setcomment] = useState([])


    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=>{
            setpost(response.data) 
            setuserid(response.data.userId)
            axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${response.data.id}`)
            .then((response)=>{
                setcomment(response.data)
            })
            .catch((err)=>{
                alert(err.message)
            })
        })
        .catch((err)=>{
            alert(err.message)
        })
       
        
    },[id])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${userid}`)
        .then((response)=>{
            setusername(response.data)
        })
        .catch((err)=>{
            alert(err.message)
        })
        
    },[userid])
    return(<div>
<h1> Name: {username.name}</h1>
<h1> Title: {post.title}</h1>
<h1> Body: {post.body}</h1>
<h1> comments: {comment.length}{comment.map((com)=>{
    return <p key={com.id}>{com.body}</p>
})}</h1>









    </div>)
}
export default ShowPost