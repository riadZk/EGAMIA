import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './projet/Home'
import Sign from './projet/Sign'
import Tables from './projet/Tables'
import Contact from './projet/Contact'
import Admin from './projet/Admin'

function App()  {

  return (
    <div className=''>
      <Routes>
      <Route path="/"  element={<Home />} />
        <Route path="/Sign" element={<Sign />} />
        <Route path="/Tables" element={<Tables />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
export default App
