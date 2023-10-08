import React,{useState} from 'react'
import axios from 'axios'
const Register=(props)=>{
    const [username,setusername] = useState('')
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')

    const handlesubmit=(e)=>{
e.preventDefault()
const formData ={
    username:username,
    email:email,
    password:password

}
axios.post('http://dct-user-auth.herokuapp.com/users/register',formData)
.then((response)=>{
    const result = response.data
    if(result.hasOwnProperty('errors')){
        alert(result.message)
    }
    else{
        alert('successfully created an account')
        props.history.push('/login')
    }
 
})
.catch((err)=>{
    alert(err.message)
})

//  console.log(formData)

    }

    const handlechange=(e)=>{

        if(e.target.name==='username'){
            setusername(e.target.value)
        }
        else if(e.target.name==='email'){
            setemail(e.target.value)
        }
        else if(e.target.name==='password'){
            setpassword(e.target.value)
        }

    }
    return(<div>
<h1> register component</h1>

<form onSubmit={handlesubmit}>
    <input type='text'
            placeholder='Enter username'
            name='username'
            value={username}
            onChange={handlechange}
    /><br/>
    <input type='text'
        placeholder='Enter email'
        name="email"
        value={email}
        onChange={handlechange}
    /><br/>
    <input type="password"
        placeholder='Enter password'
        name='password'
        value={password}
        onChange={handlechange}
    /><br/>
    <input type="Submit"/>
</form>
    </div>)
}
export default Register