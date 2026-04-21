import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {

  const links = <>
  <li><NavLink to={'/'} className={({isActive}) => `font-semibold mr-1 ${isActive ? 'text-green-500 border-2 border-green-500' : ''}`}>Home</NavLink></li>
  <li><NavLink to={'/books'} className={({isActive}) => `font-semibold mr-1 ${isActive ? 'text-green-500 border-2 border-green-500' : ''}`}>Listed Books</NavLink></li>
  <li><NavLink to={'/page-to-read'} className={({isActive}) => `font-semibold mr-1 ${isActive ? 'text-green-500 border-2 border-green-500' : ''}`}>Page to Read</NavLink></li>
  </>

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-30 p-2 shadow space-y-2">
        {links}
      </ul>
    </div>
    <NavLink to='/' className="btn btn-ghost font-bold text-xl">Book Vibe</NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-2">
      {links}
    </ul>
  </div>
  <div className="navbar-end space-x-2">
    <div className="hidden md:flex space-x-2">
      <a className="btn1 btn">Sign In</a>
      <a className="btn2 btn">Sign Up</a>
    </div>
    <div className="md:hidden dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 p-2 shadow space-y-2">
        <li><a className="btn1 btn">Sign In</a></li>
        <li><a className="btn2 btn">Sign Up</a></li>

      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;