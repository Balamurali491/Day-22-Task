import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Home.jsx'
import './Home.css'
import Home1 from './Home1.jsx'
import Home2 from './Home2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <div className='box'><Home></Home>
    <Home1></Home1>
    <Home2></Home2>
   </div>
  
  </React.StrictMode>,
)
