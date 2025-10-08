import React from 'react';
import navLogo from '../../assets/logo.png';
import Container from '../Container/Container';
import { Link, NavLink } from 'react-router';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <nav className="bg-base-100 shadow-sm">
        <Container>
          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {' '}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{' '}
                  </svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                  <li>
                    <NavLink to="/home">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/apps">Apps</NavLink>
                  </li>
                  <li>
                    <NavLink to="/installation">Installation</NavLink>
                  </li>
                </ul>
              </div>
              <Link to="/">
                <div class="flex items-center gap-2">
                  <img src={navLogo} alt="AppVerse logo" class="w-10 h-10" />
                  <div>
                    <h1 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_#60a5fa] leading-tight">
                      AppVerse
                    </h1>

                    <p class="text-[12px] text-gray-500 tracking-wide -mt-0.5">Explore the universe of productive apps</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="flex gap-10 px-1">
                <li>
                  <NavLink to="/home" className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/apps" className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}>
                    Apps
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/installation" className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}>
                    Installation
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <a href="https://github.com/mahdi9162" target="_blank" rel="noopener noreferrer" className="nav-btn">
                <FaGithub className="inline-block mb-1 mr-0.5" /> Contribute
              </a>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
