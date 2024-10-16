import React, { useState , Suspense, lazy} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/Phasmophobia_logo.png'

function Navbar() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  const About = lazy(() => import('../pages/About'));
  function navigation(path: string) {
    navigate(path)
  }
  return (
    <div style={{ backgroundColor:'black', color: 'white', width: '100vw', zIndex: '3'}}>
        <ul style={{margin:"0"}}>
            <li onClick={() => navigation('/')}><img src={logo} alt="Phasmophobia" style={{ height: '40px', marginTop: '10%' }}/></li>
            <li onClick={() => navigation('/')}>HOME</li>
            <li onClick={() => navigation('/about')}>ABOUT</li>
            <li onClick={() => navigation('/the-game')}>THE GAME</li>
            <li onClick={() => navigation('/contacts')}>CONTACT US</li>
        </ul>
    </div>
  )
}

export default Navbar