/* eslint-disable react/prop-types */
import  { useState } from 'react'

function TodoListInput({PostData}) {

  const [inputValue,setInputValue] = useState("")
  function handleEnter(e){
    if(e.key === "Enter"){
      PostData(inputValue)
      setInputValue("") 
    }
  }
  return (
    <input onKeyDown={(e)=>handleEnter(e)} value={inputValue} onChange={(e)=>setInputValue(e.target.value)} type="text" className=" text-purple-400 m-1  p-1 text-sm bg-gray-950" placeholder="new task"/>
  )
}

export default TodoListInput