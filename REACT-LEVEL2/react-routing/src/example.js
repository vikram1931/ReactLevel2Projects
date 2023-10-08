import React,{useState} from 'react'

const Example=()=>{
const [counter,setcounter] = useState(0)

const handleSubmit=()=>{


    setcounter(counter + 1)
}

    return(<div>
    <h1>{counter}</h1>

    <form>

        <input type="submit" onSubmit={handleSubmit}></input>
    </form>


    </div>)
}

export default Example