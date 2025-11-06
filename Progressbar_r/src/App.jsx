import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Progressbar from './components/progress'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div className="container">
        <h1>MY SKILLS</h1>

        <div className="con">

          <Progressbar label='HTML' skill='80%'/>
          <Progressbar label='CSS' skill='90%'/>
          <Progressbar label='JavaScript' skill='70%'/>
          <Progressbar label='Java' skill='50%'/>

        </div>

      </div>
  
  )
}

export default App
