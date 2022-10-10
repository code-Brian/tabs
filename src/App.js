import './App.css'
import Display from './Components/Display'
import Tab from '.Components/Tab'
import { useState } from 'react'

function App() {
  const [ tabs, setTabs ] = useState([])

  return (
    <div className="App">
      <div className="App-container">

      </div>
      <Display/>
    </div>
  )
}

export default App
