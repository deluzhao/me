import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import kazuhaImage from './assets/kazuha.png'
import NavigationBar from './components/NavigationBar'
import PageContent from './components/PageContent'
// https://javascript.info/browser-environment

function App() {
  const tabNames = ["About", "Projects", "Contact", "Random"]
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
      <div className="image">
        <img src={kazuhaImage} alt="Kazuha" width={300} height="auto" style={{marginLeft: 50}}/>
      </div>
    </div>
    </>
  )
}

export default App
 