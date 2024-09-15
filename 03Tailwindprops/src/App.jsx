import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  const myObj={
    button2namee:"press here",
    button1name:"click here"
  }

  return (
    <>
      <h1 className='bg-green-400 p-4 m-4 text-black rounded-xl font-serif  hover:font-roboto font-bold'>Tailwind Test</h1>
      <Card channelname="chai" buttontext="press here"/>
      <Card channelname="react"buttontext="click here"/>
    </>
  )
}

export default App
