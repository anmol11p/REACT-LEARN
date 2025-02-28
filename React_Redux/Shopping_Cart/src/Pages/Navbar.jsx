import React from "react";
import { SiFlipkart } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container header-container">
      <header className="header-section flex">
        <span className="logo">
          <SiFlipkart />
        </span>
       
          <label htmlFor="search" className="search">
            <span>
            <CiSearch/></span> <input type="text" placeholder="Search for products,brands and More" />
          </label>
      
          <div className="cart">
            <button> <NavLink to ="/cart"><span><IoCartOutline/></span> Cart </NavLink></button>
          </div>
        
      </header>
    </div>
  );
};

export default Navbar;
