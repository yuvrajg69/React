import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numallowed, setnumallowed] = useState(false);
  const [charallowed, setcharallowed] = useState(false);
  const [password, setpassword] = useState('');
  const passref = useRef(null);
  const [color, setColor] = useState('bg-blue-600');

  const passGenerator = useCallback(
    () => {
      let pass = "";
      let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
      if (numallowed) str += "1234567890"
      if (charallowed) str += "~!@#$%^&*()`=+\|]}[{'</>?"
      for (let i = 0; i < length; i++) {
        pass += str.charAt(Math.floor(Math.random() * str.length))
      }

      setpassword(pass);
    },
    [length, numallowed, charallowed])

  useEffect(() => {
    passGenerator();
  }, [length, charallowed, numallowed])

  const copyToClip = () => useCallback(
    () => {
      passref.current?.select();
      window.navigator.clipboard.writeText(password)
      setColor("bg-green-600")
      setTimeout(() => {
        setColor("bg-blue-600")
      }, 100);
    },
    [password],
  )



  return (
    <>
      <div className="w-3/5 mt-32 h-80 mx-auto rounded-2xl bg-gray-700 shadow-2xl">
        <h1 style={{ fontSize: 50, padding: 40, color: 'orange' }}>PASSWORD GENERATOR</h1>
        <div className='mx-auto max-w-xl flex gap-1'><input type="text" placeholder='password' className='w-full py-1' value={password} readOnly ref={passref} />
          <button className={`${color} shadow-md px-4 py-3 rounded-lg outline-4 text-white shrink-0`}
            onClick={copyToClip()}>copy</button></div>
        <div className='flex text-sm gap-2 items-center'>
          <input type="range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer ml-48 my-5'
            onChange={(e) => { setlength(e.target.value) }}
          />
          <label className='text-red-600'>Length: {length}</label>
          <input type="checkbox"
            onChange={() => { setcharallowed((prev) => !prev) }} />
          <label className='text-red-600'>Characters</label>
          <input type="checkbox"
            onChange={() => { setnumallowed((prev) => !prev) }} />
          <label className='text-red-600'>Numbers</label>

        </div>
      </div>
    </>
  )
}

export default App
