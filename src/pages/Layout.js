import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

import './pages.css'

function Layout() {
  return (
    <div className="container">
      <nav className="navigation-bar">
        <ul>
          <li>
            <Link to="/"><FontAwesomeIcon icon={faHouse} /></Link>
          </li>
          <li>
            <Link to="/clockin">clock-in</Link>
          </li>
          <li>
            <Link to="/hours">Hours</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default Layout;