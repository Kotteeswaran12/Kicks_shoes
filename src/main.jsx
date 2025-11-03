import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDom from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
// import Dummy from './Dummy.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App></App>

  </BrowserRouter>
)
