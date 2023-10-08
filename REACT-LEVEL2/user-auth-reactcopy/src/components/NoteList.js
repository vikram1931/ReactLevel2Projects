import React from 'react'
import axios from 'axios'
import swal from 'sweetalert';
const NoteList=(props)=>{
    const {notes,removenote} = props

    const handleclick=(id)=>{
//console.log(id)
const confirmDelete = window.confirm("Are you sure?")

if(confirmDelete){
    axios.delete(`http://dct-user-auth.herokuapp.com/api/notes/${id}`,{headers:{'x-auth':localStorage.getItem('token')}})
    .then((response)=>{
      //  console.log(response.data)
      const result = response.data
        removenote(result._id)
    })
    .catch((err)=>{
        alert(err.message)
    })
}
    }
         const SweetAlert = (body,title) =>{
             return(
                 <div>
                     <h1>{body}</h1>
                     <h1>{title}</h1>
                 </div>
             )
         }
const handlealertclick=(id)=>{

    axios.get(`http://dct-user-auth.herokuapp.com/api/notes/${id}`,{headers:{'x-auth':localStorage.getItem('token')}})
    .then((response)=>{
      //  console.log('alert',response.data)
      const result = response.data
      swal({
  title: result.title,
  text: result.body,
  buttons:{
      text:'cancel',
     
  }


      })
    })
}


    return(<div>
{
notes.map((note)=>{
    return (<div key={note._id} onClick={()=>handlealertclick(note._id)} >
<h1>{note._id}</h1>
<h1>{note.title}</h1>
<h1> {note.body}</h1>
<button onClick={()=>handleclick(note._id)}>delete</button>

    </div>)
})
}

    </div>)
}

export default NoteList