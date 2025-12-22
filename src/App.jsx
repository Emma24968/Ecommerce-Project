import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='bg-yellow-700 flex'>
    <h1 className='bg-red-500 items-right'>Hello sir</h1>
    <h1 className='bg-red-500 items-right'>Hello sir</h1>
    <h1 className='bg-red-500 items-right'>Hello sir</h1>
    <h1 className='bg-red-500 items-right'>Hello sir</h1>
  </div>
  )
}

export default App
