import React from 'react'
import { Link } from 'react-router'
import { CartContext } from '../context/CartContext'
import { useContext, useState } from 'react'
import Logo from '../assets/logo.png'
import SearchBar from './SearchBar'


function Navbar() {
  const { cartItems } = useContext(CartContext)
  const [menuOpen, setMenuOpen] = useState(false)

  
  return (
   <>
   <header className="bg-black text-white shadow">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link to="/" className="flex items-center font-bold text-xl gap-2">
            <img className="max-h-12 w-auto" src={Logo} alt="Logo" />
            <span className="hidden sm:inline">thewebpal</span>
          </Link>
        </div>

        {/* SearchBar in the middle (hidden on small screens) */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="hidden md:block w-full">
            <SearchBar />
          </div>
        </div>

        {/* Hamburger menu for small screens */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
            aria-label="Open menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`flex-col md:flex-row flex items-center gap-4 mt-2 md:mt-0 bg-black md:bg-transparent absolute md:static top-16 left-0 w-full md:w-auto z-50 transition-all duration-200 ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
          <li>
            <Link to="/" className="hover:text-green-400 transition" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-green-400 transition" onClick={() => setMenuOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="/cart" className="relative hover:text-green-400 transition" onClick={() => setMenuOpen(false)}>
              Cart
              <span className="absolute -top-2 -right-3 bg-red-500 text-xs rounded-full w-5 h-5 flex justify-center items-center">
                {cartItems.length}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
   </>

  )
}

export default Navbar