import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../App.scss";
import portada from "../assets/portada.svg";



const Navbar = () => {
  return (
    <nav className="text-center navbar-light mb-4 ">
      <div className="container1">
      

        <Link to="/" 
        
        className="navbar-brand fs-1  ubuntu "
         >
          Rick & Morty</Link>
        
        <style jsx>{`
          button[aria-expanded="false"] > .close {
            display: none;
          }
          button[aria-expanded="true"] > .open {
            display: none;
          }
          .container1 {
            background-image: url(${portada});
            background-size: cover;
            background-repeat: no-repeat;
            font-weight: bold;
          }
        `}</style>
      
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fas fa-bars open text-black"></span>
          <span class="fas fa-times close text-succes"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-2">
            <NavLink to="/" className="nav-link text-white">
              Character
            </NavLink>
            <NavLink to="/episodes" className="nav-link text-white">
              Episode
            </NavLink>
            <NavLink
              activeClassName="active"
              className="nav-link text-white"
              to="/location"
            >
              Location
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
