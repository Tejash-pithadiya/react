
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <img src="img/logo.png" className='navlogo navbar-brand' alt="" />
        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbarnav">
            <li className="nav-item navitem">
              <NavLink className={(e)=>{return e.isActive ? "activelink" : "nav-Link"}} to="/">HOME</NavLink>
            </li>
            <li className="nav-item navitem">
              <NavLink className={(e)=>{return e.isActive ? "activelink" : "nav-Link"}} to="/about-us">ABOUT US</NavLink>
            </li>
            <li className="nav-item navitem">
              <NavLink className={(e)=>{return e.isActive ? "activelink" : "nav-Link"}} to="/menu">OUR MENU</NavLink>
            </li>
            <li className="nav-item navitem">
              <NavLink className={(e)=>{return e.isActive ? "activelink" : "nav-Link"}} to="/contact-us">CONTACT</NavLink>
            </li>
            <li className="nav-item navitem">
              <NavLink className={(e)=>{return e.isActive ? "activelink" : "nav-Link"}} to="/blog">BLOG</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
