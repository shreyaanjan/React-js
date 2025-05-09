import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Components from './Components.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Components />
  </StrictMode>,
)
