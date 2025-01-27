import React, { useEffect, useState } from 'react'

import './App.css'
const localdata = () =>{
  let list= localStorage.getItem("key");
  if(list){
    return JSON.parse(localStorage.getItem("key"));
  }else{
    return [];
  }
}
localdata()

function App () {
 
  const [value, setValue] = useState("");
  const [Task, setTast] = useState(localdata());

  useEffect(()=>{
    localStorage.setItem("key", JSON.stringify(Task));
  }, [Task])
  
  function handler(e){
    setValue(e.target.value)
  }

  const handleform = (event)=>{
    event.preventDefault()
    

    if(!value){
      return;
    }
    if(Task.includes(value)){
      return;
    }
    setValue("")
    
    setTast((prev)=> [...prev, value])

  }

  const handledelete = (currdata) =>{
    const updatetast = Task.filter((data)=> data !== currdata);
    setTast(updatetast)
  }

  return (
    <>
      
      <div className='todo'>
      <input type="text" placeholder='Todo Text' autoComplete='off' value={value} onChange={handler} />
      <button onClick={handleform}>Add</button>
      
      

      <div className='listdiv'>
        <ul>
          {Task.map((value, key)=>{
           return<li key={key}>
              <span>{value}</span>
              <button className='btn'
              onClick={()=> handledelete(value)} >Delete</button>
            </li>
          })}
        </ul>
      </div>
      </div>
      </>
  )
}

export default App
