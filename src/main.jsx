import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import NavBar from './NavBar.jsx'
import HeroSection from './HeroSection/HeroSection.jsx'
// import Dummy from './Dummy.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <HeroSection/>

  </StrictMode>,
)
