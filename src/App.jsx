import React from 'react'
import Background from './components/Background'
import Foreground from './components/foreground'

const App = () => {

  return (
    <div className=' relative bg-zinc-800 w-full h-screen'>
      <Background />
      <Foreground/>
    
  </div>
  )
}

export default App
