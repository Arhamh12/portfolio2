import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './Nav/Nav'
import Home from './Home/Home' 
import Footers from './Footer/Footers'
import { EmailProvider } from './Home/component/Contexts/EmailContext'

function App() {

  return (
    <>
    <EmailProvider>
      <Nav></Nav>
      <Home></Home>
      <Footers />
    </EmailProvider>
    
    </>
  )
}

export default App
