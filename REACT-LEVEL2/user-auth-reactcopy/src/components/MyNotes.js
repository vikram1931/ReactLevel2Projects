import React,{useState,useEffect} from 'react'
import axios from 'axios'
import NoteForm from './NoteForm'
import NoteList from './NoteList'
const MyNotes=()=>{
    const [notes,setnotes] = useState([])
      useEffect(()=>{
axios.get(`http://dct-user-auth.herokuapp.com/api/notes`,{headers:{'x-auth':localStorage.getItem('token')}})
.then(res=>{
    setnotes(res.data)
})
.catch(err=>{
    alert(err.message)
})     
},[])
    const AddData=(formdata)=>{
        console.log(formdata)
setnotes([formdata,...notes])
    }
    const removenote=(id)=>{
        console.log("id",id)
const result = notes.filter((note)=>{
   // console.log('note details',note)
  return   note._id !== id
})

setnotes(result)
    }

    return(<div>
 <h1> MY NOTES APP</h1>
 <NoteForm AddData={AddData}/>
 <NoteList notes={notes} removenote={removenote}/>
    </div>)
}
export default MyNotes