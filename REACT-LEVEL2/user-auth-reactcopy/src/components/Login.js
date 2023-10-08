import React,{useState} from 'react'
import axios from 'axios'

const Login=(props)=>{
    const [email,setemail] = useState('')
    const [password,setpassword] =useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData = {
            email:email,
            password:password
        }
        axios.post('http://dct-user-auth.herokuapp.com/users/login',formData)
        .then((response)=>{
            const result = response.data
            if(result.hasOwnProperty('errors')){// Object.keys(result).includes('errors')
alert(result.errors)
            }
            else{
alert('successfully logged in')
localStorage.setItem('token',result.token)
props.history.push('/')
props.handleAuth()
            }
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }

    const handleChange=(e)=>{
        if(e.target.name==="email"){
            setemail(e.target.value)
        }
        else if(e.target.name==="password"){
            setpassword(e.target.value)
        }
    }
    return(<div>
<h1>Login component</h1>
<form onSubmit={handleSubmit}>
    <input type="text" value={email} placeholder="enter email" name="email" onChange={handleChange}/><br></br>
    <input type="password" value={password} placeholder="enter password" name="password" onChange={handleChange}/><br/>
<input type="submit"/>
</form>
    </div>)
}
export default Login