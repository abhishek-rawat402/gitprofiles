import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Cards from './App.jsx'
import Header from './header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Cards/>
  </StrictMode>
)
