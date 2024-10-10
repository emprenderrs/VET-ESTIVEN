import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { Home } from './components/Home'
import { Appointments } from './components/Appointments'
import { Patients } from './components/Patients'
import { Veterinarians } from './components/Veterinarians'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 p-4">
          <ul className="flex space-x-4 text-white">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/appointments">Appointments</Link></li>
            <li><Link to="/patients">Patients</Link></li>
            <li><Link to="/veterinarians">Veterinarians</Link></li>
          </ul>
        </nav>
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/veterinarians" element={<Veterinarians />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App