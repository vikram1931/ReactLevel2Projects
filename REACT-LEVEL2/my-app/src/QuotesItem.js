import React,{useState} from 'react'
import EditQuote from './EditQuote'
const QuotesItem =(props)=>{
    const{id,name,body,removeItem,editItem} =props
    const[toggle,settoggle] = useState(false)
    const handleRemove = ()=>{
        const confirmRemove = window.confirm('Are you sure?')
        if(confirmRemove){
            removeItem(id)
        }
        removeItem(id)
    }

    const handleToggle =()=>{
        const result = !toggle
        //settoggle(!toggle)
        settoggle(result)
    }
    

    return (<div>
    {toggle ?(<div>
        <EditQuote id={id} body={body} name={name} editItem={editItem} handleToggle={handleToggle}/>
        <button onClick={handleToggle}>cancel</button>
    </div>)  :(<div>

        <blockquote>{body}-{name}</blockquote>
        <button onClick={handleToggle}>edit</button>
   
   <button onClick={handleRemove}>Remove</button>
    </div>)}
   
    </div>)
}

export default QuotesItem