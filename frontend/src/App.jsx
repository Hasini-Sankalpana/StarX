import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Articles from './pages/Articles'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import DashSidebar from './components/DashSidebar'

function App() {
  return (
    <div className='App'>
     <Routes>
     <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path="/articles/:id" element={<><Navbar /><Articles /></>} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/dashboard" element={<DashSidebar />} />

        
     </Routes>
    </div>
  )
}

export default App