import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Games from './Games.jsx' // Import the new Games component
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/games" element={<Games />} /> {/* New route for Games */}
      </Routes>
    </Router>
  </StrictMode>,
)
