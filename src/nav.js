import { React } from 'react'
import './nav.css'
import { Link, useResolvedPath, useMatch } from 'react-router-dom'

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({path: resolved.pathname, end: true});

  return (
    <div className={match ? "navItems active" : "navItems"}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  )
}


function Nav( { current } ) {
  return (
    <nav className="nav">
        <div className="star">&#10022;</div>
        <div className="rectangle"></div>
        <div className="navFull">
            <CustomLink to="/"><strong>00</strong> HOME</CustomLink>
            <CustomLink to="/destination"><strong>01</strong> DESTINATION</CustomLink>
            <CustomLink to="/crew"><strong>02</strong> CREW</CustomLink>
            <CustomLink to="/technology"><strong>03</strong> TECHNOLOGY</CustomLink>

        </div> 
      </nav>
  )
}

export default Nav;


