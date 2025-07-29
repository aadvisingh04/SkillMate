import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // This line correctly imports your Tailwind CSS and custom animations from index.css

import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx' // This correctly imports your App component from App.jsx


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App /> {/* This renders your SkillMate App component */}
    </BrowserRouter>
  </StrictMode>,
)