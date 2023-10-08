import React,{useState} from 'react';
import {v4 as uuidv4} from 'uuid'

const QuoteForm = (props) => {
    const{formSubmission,id:slNo,name:author,body:quote,handleToggle} = props
   const [id,setId] = useState(slNo ? slNo:uuidv4())
    const [name,setname] = useState(author ? author : "")
    const [body,setbody] = useState(quote ? quote :"")
    const handleSubmit =(e)=>{
        e.preventDefault()
        const formData = {
          //  id:Number(new Date()),
            id:id,
            name:name,
            body:body
        }

     //  console.log('formdata',formData)
//addItem(formData)
formSubmission(formData)
//to reset the form data after entering the data

if(handleToggle ){
    handleToggle()
}
setname('')
setbody('')
  
    }
    const handleNameChange=(e)=>{
        
        setname(e.target.value)
    }
    const handleBodyChange=(e)=>{

        setbody(e.target.value)
    }
  return <div>
      <h2>Add quote</h2>
      <form onSubmit={handleSubmit}>
       <label>Name</label> <br/>
       <input type="text" value={name} onChange={handleNameChange}/><br/>
        <label>Body</label><br/>
        <textarea value={body} onChange={handleBodyChange}></textarea> <br/>

        <input type='submit' value="save"/>
      </form>
  </div>;
};

export default QuoteForm;
