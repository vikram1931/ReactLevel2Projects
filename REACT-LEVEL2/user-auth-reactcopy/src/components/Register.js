import axios from 'axios'
import React,{useState} from 'react'

const Register=(props)=>{
    const [username,setusername] = useState('')
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    const [formErrors,setformErrors] = useState({})
    const errors={}

const handleChange=(e)=>{
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
const runValidations=()=>{
if(username.trim().length===0){
 errors.username = 'username cannot be blank'

//console.log('errors check',errors.username)
}
if(email.trim().length===0){
    errors.email = 'email cannot be blank'
}
if(password.trim().length===0){
    errors.password = 'password cannot be blank'
}


}

//console.log("errror object",errors)
const handleSubmit=(e)=>{
e.preventDefault()

runValidations()

if(Object.keys(errors).length===0){
    setformErrors({})
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


}
else{
   // console.log('formerrors',errors)
    setformErrors(errors)
}




}
    return(<div>
<h2>Register with us</h2>
<form onSubmit={handleSubmit}>
    <input  type='text' placeholder='Enter username'
     value={username}
     onChange={handleChange}
     name='username'/> <br/>
         {formErrors.username && <span>{formErrors.username}</span>}
     <br/>
     <input type='text' placeholder='enter email'
     value={email}
     onChange={handleChange}
     name='email'/> <br/>
     <input type='password' placeholder='enter password'
     value={password}
     onChange={handleChange}
         name="password"
     /> <br/>
     <input type="submit"/>
</form>
    </div>)
}

export default Register