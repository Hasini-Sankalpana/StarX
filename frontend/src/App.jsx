import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Articles from './pages/Articles'


function App() {
  return (
    <div className='App'>
     <Routes>
     <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path="/articles/:id" element={<><Navbar /><Articles /></>} />  
     </Routes>
    </div>
  )
}

export default App