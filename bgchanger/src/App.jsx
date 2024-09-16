import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-screen h-screen duration-200 " style={{backgroundColor:color}}>
      </div>
      <div className="bottom-20 fixed flex flex-wrap justify-center inset-x-1 px-2 ">
        <div className='fixed flex flex-wrap justify-center bg-white outline-none gap-2 rounded-xl px-2 py-1'><button onClick={()=>setColor("red")}  className='rounded-sm px-1 py-1 w-20 'style={{backgroundColor:"red"} }>red</button>
        <button onClick={()=>setColor("olive")} className='rounded-sm px-1 py-1 w-20 'style={{backgroundColor:"olive"} }>olive</button>
        <button onClick={()=>setColor("blue")} className='rounded-sm px-1 py-1 w-20 'style={{backgroundColor:"blue"} }>blue</button>
        <button onClick={()=>setColor("yellow")} className='rounded-sm px-1 py-1 w-20 'style={{backgroundColor:"yellow"} }>yellow</button></div>
      </div>
    </> 
  )
}

export default App
