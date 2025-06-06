import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {

    const navOptions = <>

<li>
          <Link to="/">Home</Link>
        </li>
       
        <li>
          <Link to="/contract">Contract Us</Link>
        </li>
        <li>
          <Link to="">Deshboard</Link>
        </li>
        <li>
          <Link to="/menu">Our menu</Link>
        </li>
        <li>
          <Link to="/order">Our shop</Link>
        </li>
    </>




    return (
        <>


       <div className="navbar max-w-screen-xl  fixed z-10 bg-opacity-20 bg-black text-white">
     <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        
        {navOptions}

      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Rastro</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
        {navOptions}

    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Get started</a>
  </div>
   </div>


        </>
    );
};

export default Navber;