import { React } from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

function Nav( { current } ) {
  return (
    <nav className="nav">
        <div className="star">&#10022;</div>
        <div className="rectangle"></div>
        <div className="navFull">
          <div className="navItems">
            <Link to="/"><strong>00</strong> HOME</Link>
          </div>
          <div className="navItems">
            <Link to="/destination"><strong>01</strong> DESTINATION</Link>
          </div>
          <div className="navItems">
            <Link to="/crew"><strong>02</strong> CREW</Link>
          </div>
          <div className="navItems">
            <Link to="/technology"><strong>03</strong> TECHNOLOGY</Link>
          </div>
        </div> 
      </nav>
  )
}

export default Nav;


