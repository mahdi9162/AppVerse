import React from 'react';
import navLogo from '../../assets/logo.png';
import Container from '../Container/Container';
import { Link, NavLink } from 'react-router';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <nav className="bg-base-100 shadow-sm py-3">
        <Container>
          <div className="navbar px-3 md:px-0">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-heading">
                  <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}>
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
              <Link to="/">
                <div className="flex items-center gap-2">
                  <img src={navLogo} alt="AppVerse logo" className="w-8 md:w-10 h-8 md:h-10" />
                  <div>
                    <h1 className="logo-name-style font-heading">AppVerse</h1>

                    <p className="text-[12px] hidden md:block md:text-base text-gray-500 tracking-wide -mt-0.5 font-p">
                      Explore the universe of productive apps
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="flex gap-10 px-1 font-heading">
                <li>
                  <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}>
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
              <a href="https://github.com/mahdi9162" target="_blank" rel="noopener noreferrer" className="nav-btn font-p">
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
