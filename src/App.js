import './App.css'
import Display from './Components/Display'
import Tab from './Components/Tab'
import { useState } from 'react'
function App() {

  const tabs = [
    {title: "Tab 1", content: "This is the content for Tab 1"},
    {title: "Tab 2", content: "This is the content for Tab 2"},
    {title: "Tab 3", content: "This is the content for Tab 3"}
  ]

  const [showTabs, setShowTabs] = useState(tabs)

  return (
    <div className="App">
      <Tab showTabs={ showTabs }/>
      <Display/>
    </div>
  )
}

export default App
