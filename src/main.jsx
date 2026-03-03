import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDom from 'react-dom/client'
import NavBar from './NavBar.jsx'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import Footer from './Footer/Footer.jsx'
// import Dummy from './Dummy.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <NavBar />
    <App></App>
    <Footer />

  </BrowserRouter>
)
