import { useState } from "react";
import { Link } from "react-router";
import logo from '../assets/logo.gif';


export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((open) => !open);
  const closeDropdown = () => setDropdownOpen(false);

  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50 bg-base-100 shadow-md px-4 max-w-full">

      <div className="navbar-start flex items-center gap-2">
        <div className="relative dropdown lg:hidden">
          <button
            onClick={toggleDropdown}
            className="btn btn-ghost"
            aria-expanded={dropdownOpen}
            aria-controls="dropdown-menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>

          {dropdownOpen && (
            <ul
              id="dropdown-menu"
              className="menu menu-md dropdown-content fixed top-[60px] left-0 w-screen rounded-none bg-base-100 p-4 shadow z-50"
            >
              <li><Link to="/" onClick={closeDropdown}>Home</Link></li>
              <li><Link to="/playlist" onClick={closeDropdown}>Playlist</Link></li>
              <li><Link to="/browse" onClick={closeDropdown}>Discover</Link></li>
              <li><Link to="/plan" onClick={closeDropdown}>Premium Plans</Link></li>
            </ul>
          )}
        </div>

        <Link to="/" className="btn btn-ghost text-xl normal-case">
          <img src={logo} alt="Sound Shift Logo" className="h-10 md:h-14 lg:h-16 object-contain" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="text-lg menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/playlist">My Playlist</Link></li>
          <li><Link to="/browse">Discover</Link></li>
          <li><Link to="/plan">Premium Plans</Link></li>
        </ul>
      </div>

      <div className="navbar-end">
        <button className="btn btn-primary px-10 py-3">Login</button>
      </div>
    </div>
  );
}

