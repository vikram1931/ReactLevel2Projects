import React from 'react'
import TaskItem from './TaskItem'
const TasksList=(props)=>{
const {tasks,removeItem,editItem} = props
    return(<div>

 <h1>Tasks list</h1>
 {tasks.length===0 ? (<div><h1>No tasks found </h1>
        <h1> add your first task</h1>
        </div>
        ):(
            <div><h2>My Tasks -{tasks.length}</h2>
            {
                tasks.map((task,i)=>{
                    return (<TaskItem key={i} {...task}
                        removeItem={removeItem}
                        editItem ={editItem}
                    />)
                })
            }
            
            
            </div>
        )}


 
    </div>)
}

export default TasksList