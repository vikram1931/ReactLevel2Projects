import React from 'react'
import QuoteForm from './QuoteForm'
const EditQuote =(props)=>{
const {id,name,body,editItem,handleToggle} = props

const formSubmission =(formData)=>{
console.log('formData',formData)
editItem(formData)
}


    return(<div>
        <h2> Edit Quote </h2>
        <QuoteForm id={id} body={body} name={name} formSubmission={formSubmission} handleToggle={handleToggle}/>
    </div>)
}
 
export default EditQuote