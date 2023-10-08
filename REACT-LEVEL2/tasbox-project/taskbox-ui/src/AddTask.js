import React,{useState} from 'react'
import axios from 'axios'
import TaskForm from './TaskForm'
const AddTask=(props)=>{
const {addItem} = props
const [isSaved,setIsSaved] = useState(false)
    const formSubmit =(task)=>{
       // console.log('form submit',task)

       axios.post('http://localhost:3033/api/tasks',task)
       .then((response)=>{
           const result = response.data
          // console.log(result)
          addItem(result)
          setIsSaved(true)
       })  //success
       .catch((err)=>{
           alert(err.message)
       }) //failure
    }

const toggleIsSaved =()=>{
    setIsSaved(false)
}



return(<div>
<h2> Add task</h2>
<TaskForm 
 isSaved={isSaved}
toggleIsSaved={toggleIsSaved}
formSubmit={formSubmit}
 />
</div>)
}
export default AddTask