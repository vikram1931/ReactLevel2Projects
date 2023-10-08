import axios from 'axios'
import React,{useState} from 'react'

const NoteForm=(props)=>{
    const {AddData} = props
const [title,settitle] = useState('')
const [body, setbody] = useState('')
const error ={}

const handletitle=(e)=>{
settitle(e.target.value)

}
const handlebody=(e)=>{
setbody(e.target.value)
}
const handlesubmit=(e)=>{
e.preventDefault()
const formData={title:title,
body:body

}
if(title===""){
    error.message='this field is mandatory'
}
if(error.hasOwnProperty('message')){
    //alert('Add the title')
    alert(error.message)
}
else{
    axios.post(`http://dct-user-auth.herokuapp.com/api/notes`,formData,{headers:{'x-auth':localStorage.getItem('token')}})
    .then((response)=>{
     //   console.log(response.data)
     AddData(response.data)
settitle('')
setbody('')
    })
    .catch((err)=>{
alert(err.message)
    })
}

}

    return (<div>
    <form onSubmit={handlesubmit}>

        <input type="text" value={title} placeholder='Enter Title' onChange={handletitle}/> <br/>
        <textarea value={body} placeholder='Enter body ....' onChange={handlebody}></textarea> <br/>
        <button type="submit">Save</button>
    </form>

    </div>)
}

export default NoteForm