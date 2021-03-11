import React, {useState} from 'react';
import * as FAIcons from "react-icons/fa";
import * as AIIcons from "react-icons/ai";
import { Link } from 'react-router-dom';

import '../navigation/navigation.styles.css';
import sidebarData from '../navigation/slide-bar-data';

const NavBar = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  return(
  <>
    <div className="nav_bar">
      <Link className = 'menu-bars'>
        <FAIcons.FaBars onClick = {showSidebar}/>
      </Link>
      <span className = "orgName">Online IT Software Solutions</span>
    </div>
    <nav className = {sidebar ? 'nav-menu-active' : 'nav-menu'}>
      <ul className = 'nav-menu-items' onClick = {showSidebar}>
        <li className = 'navbar-toggle'>
          <Link className = 'menu-bars'>
            <AIIcons.AiOutlineClose/>
          </Link>
          </li>
          {
            sidebarData.map((item,index) => 
              (
                <li key = {index} className = {item.cname} >
                 <Link to = {item.path}>
                  <span>{item.title}</span>
                 </Link> 
                </li>
              ))
          }
      </ul>
    </nav>
  </>
  )
}
export default NavBar;