import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import NavBar from './NavBar.jsx'
import HeroSection from './HeroSection/HeroSection.jsx'
import NewDrop from './NewDrop/NewDrop.jsx'
import Review from './Review/Review.jsx'
import Footer from './Footer/Footer.jsx'
// import Dummy from './Dummy.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <HeroSection/>
    <NewDrop/>
    <Review />
   <Footer/>
  </StrictMode>,
)
