import React from 'react'
import {Link,Route} from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Account from './Account'
const NavBar=(props)=>{
    const {userLoggedIn,handleAuth} = props
    return(<div>

<ul>
  <li><Link to="/">Home</Link></li>
  {
      userLoggedIn ? (
          <React.Fragment>
          <li> <Link to="/account">Account</Link></li> 
            <li><Link to="" onClick={()=>{
                localStorage.removeItem('token')
                alert("successfully logged out")
                handleAuth()
            }}>Logout</Link></li>
          </React.Fragment>
            
          
      ):(
          <React.Fragment>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          
          </React.Fragment>
         
      )
  }
  
</ul>
<Route path="/" component={Home} exact={true}></Route>
<Route path="/register" component={Register}></Route>
<Route path="/login" render={(props)=>{
    return <Login
        {...props}
        handleAuth={handleAuth}
    />
}}></Route>
<Route path="/account" component={Account}></Route>
    </div>)
}

export default NavBar