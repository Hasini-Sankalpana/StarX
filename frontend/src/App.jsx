import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Articles from './pages/Articles'

function App() {
  return (
    <div className='App'>
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/articles/:id' element={<Articles/>} />
     </Routes>
    </div>
  )
}

export default App