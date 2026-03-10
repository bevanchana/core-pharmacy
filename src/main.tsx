import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CorePharmacyApp from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CorePharmacyApp />
  </StrictMode>,
)
