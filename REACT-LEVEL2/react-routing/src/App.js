import React from 'react'
import {Link,Route} from 'react-router-dom'

import Home from './Home'
import About from './About'
import Contact from './Contact'
import UsersList from './UsersList'
import UserShow from './UserShow'
const App=()=>{
  return(<div>
React routing
<ul>
   <li><Link to="/">Home</Link></li>
   <li><Link to="/About">About</Link></li>
   <li><Link to="/Contact">contact</Link></li>
   <li><Link to="/users">Users</Link></li>

   
</ul>
<Route path="/" component={Home} exact={true}/>
<Route path="/About" component={About}/>
<Route path="/Contact" component={Contact}/>
<Route path="/users" component={UsersList} exact={true}/>
<Route path="/users/:id" component={UserShow}/>
  </div>)
}

export default App