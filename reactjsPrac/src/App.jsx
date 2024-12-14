import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Intro from './components/Intro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='flex justify-center items-center h-screen w-full'><div className='Welcome text-red-500  text-1xl'><h1>HELLO WORLD</h1>
      <Intro />
      </div>
      </main>
    </>
  )
}

export default App
