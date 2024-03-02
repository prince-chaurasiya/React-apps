import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charecterAllowed, setcharecterAllowed] = useState(false);
  const [password, setPassword] = useState("")
  // useRef hook
  const passwordRef = useRef(null)
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // agar password k kuchh charecter hi select karne ho to
    //passwordRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password)
  }, [password])
  const passwordGenerator = useCallback (() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charecterAllowed) str += "!@#$%^&*_-+=[]{}~`"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      setPassword(pass)

    }
  }, [length, numberAllowed, charecterAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charecterAllowed, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-black-500 bg-green-500'>
        <h1 className='text-4xl text-center text-white my-3'>Password Generator</h1>
        <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'>


          <div className='justify-center flex'>
            <input
              type='text'
              value={password}
              className='outline-none w-full py-1 px-3'
              placeholder='Password'
              readOnly
              ref={passwordRef}
            />
            <button onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
          </div>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex-items-center gap-x-1'>
            <input
              type='range'
              min={0}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label> Length : {length}</label>
          </div>
          <div className='flex-items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => { setnumberAllowed((prev) => !prev) }}
            />
            <label htmlFor='numberInput'> Numbers </label>
          </div>

          <div className='flex-items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={charecterAllowed}
              id='charecterInput'
              onChange={() => { setcharecterAllowed((prev) => !prev) }}
            />
            <label htmlFor='charecterInput'> charecters </label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
