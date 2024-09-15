import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const counter=()=>{
    setCount(count+1)
  }
  const remcounter=()=>{
    setCount(count-1)
  }

  return (
    <>
      <h1>Button has been clicked  {count}  times</h1>
      <button onClick={counter}>click me  {count}</button>
      <br />  
      <button onClick={remcounter}>remove me  {count}</button>
    </>
  )
}

export default App
