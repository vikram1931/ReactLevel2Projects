import React,{useState} from 'react'
import axios from 'axios'
const Login=(props)=>{
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')

    const handlesubmit=(e)=>{
e.preventDefault()
const formData ={
    email:email,
    password:password
}

// if validation pass, (validation code)
axios.post('http://dct-user-auth.herokuapp.com/users/login',formData)
.then((response)=>{
const result = response.data
//console.log(result)
if(result.hasOwnProperty('errors')){
    alert(result.message)
}
else{
    alert('successfully logged in')

    localStorage.setItem('token',result.token)
    props.history.push('/')
    props.handleAuth()
}
})
.catch((err)=>{
    alert(err.message)
})


    }
    const handleChange=(e)=>{
if(e.target.name==='email'){
    setemail(e.target.value)
}
else if(e.target.name==='password'){
    setpassword(e.target.value)
}
    }
    return(<div>
        <h1> login component</h1>
        <form onSubmit={handlesubmit}>
            <input type="email"
                placeholder='enter email'
                value={email}
                name="email"
                onChange={handleChange}
            /><br/>
            <input type="password"
                placeholder='enter password'
                value={password}
                name="password"
                onChange={handleChange}
            /><br/>
            <input type="submit"/>
        </form>
    </div>)
}

export default Login