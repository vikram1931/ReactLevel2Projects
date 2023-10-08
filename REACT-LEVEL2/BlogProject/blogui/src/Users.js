import React from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
const Users = () => {
    const [users,setusers] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            const result = response.data
            setusers(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])

  return (
    <div>
      <h1> Users List -{users.length}</h1>

    {
        users.map((user)=>{
            return <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
        })
    }

    </div>
  );
};
export default Users;
