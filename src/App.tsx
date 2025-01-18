import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import NavigationBar from './components/NavigationBar'
import PageContent from './components/PageContent'

function App() {
  const tabNames = ["About", "Projects", "Contact"]
  const [tab, setTab] = useState(0)

  return (
    <>
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="navbar">
      <NavigationBar
        names={tabNames} 
        tab={tab}
        setter={setTab} />
      </div>
      <div className="page">
        <PageContent id={tab} />
      </div>
    </div>
    </>
  )
}

export default App
 