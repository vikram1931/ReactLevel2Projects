import React from 'react'
import QuoteForm from './QuoteForm'
const AddQuote=(props)=>{
const {addItem} = props

const formSubmission = (formData)=>{
//console.log('formData',formData)
addItem(formData)
}

return (<div>
    
    <h2>Add quote</h2>
    <QuoteForm formSubmission={formSubmission}/>
</div>)
}

export default AddQuote