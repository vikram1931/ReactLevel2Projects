import React from 'react'
import {Link,Route} from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import Posts from './Posts'
import UserShow from './UserShow'
import ShowPost from './ShowPost'
const App =()=>{
  return(<div>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li> <Link to="/Users">Users</Link></li>
    <li><Link to="/Posts">Posts</Link></li>
  </ul>
 
<Route path="/" component={Home} exact={true}></Route>
<Route path="/Users" component={Users} exact={true}></Route>
<Route path="/Posts" component={Posts} exact={true}></Route>
<Route path="/users/:id" component={UserShow}></Route>
<Route path="/Posts/:id" component={ShowPost}></Route>
  </div>)
}

export default App