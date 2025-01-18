import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import NavigationBar from './components/NavigationBar'

function App() {
  const [tab, setTab] = useState(0)

  return (
    <>
    <div className="container">
      <div className="one">
        <HomePage />
      </div>
      <div className="two">
      <NavigationBar
        names={["About", "Projects", "Contact"]} 
        tab={tab}
        setter={setTab} />
      </div>
    </div>
    <div>
        You've selected tab {tab}.
    </div>
    </>
  )
}

export default App
 