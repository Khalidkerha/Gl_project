import React, { useState } from 'react';
import './Heder2.css';
import { Link } from 'react-router-dom';
function Header() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  function toggleMenu() {
    setIsSubMenuOpen(!isSubMenuOpen);
  }

  return (
    <header className="page_header">
      <a href="#" className="slogan">
        <img src="/images/Screenshot_2023-12-13_133009-removebg-preview.png" alt="Your Image" />
        <div className="logo">
          <span> MOHAMI DZ</span>
        </div>
      </a>
      <nav className="main_nav">
        <ul>
          <li><a href="#"><Link to="/worktable">schedule</Link></a></li>
        </ul>
      </nav>
     <img className="profile_img" src="/images/user.png" onClick={toggleMenu} /> 
      <div className={`sub-menu-wrap ${isSubMenuOpen ? 'open-menu' : ''}`} id="subMenu">
        <div className="sub-menu">
          <div className="user-info">
            <img className="profile_img" src="/images/user.png" />
            <h5> khaled kerha </h5>
          </div>
      
          <div className="button_sect">
          <a className="sub-menu-link">
            <img src="/images/profile.png"/>
            <Link to="/edit_profil"><p>edit profile</p>
            </Link>
          </a>
          <a className="sub-menu-link">
            <img src="/images/logout.png" />
            <Link to="">  <p>Logout</p>
            </Link>
          </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
