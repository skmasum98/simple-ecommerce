import React from 'react'
import { Link } from 'react-router'
import { CartContext } from '../context/CartContext'
import { useContext, useState } from 'react'
import Logo from '../assets/logo.png'
import SearchBar from './SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faXmark, faShoppingCart } from '@fortawesome/free-solid-svg-icons'



function Navbar() {
  const { cartItems } = useContext(CartContext)
  const [menuOpen, setMenuOpen] = useState(false)

  
  return (
    <header className="bg-black text-white shadow sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* MOBILE: left menu, center logo, right cart */}
        <div className="flex items-center justify-between w-full md:hidden">
          
          {/* Left: hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon
              icon={menuOpen ? faXmark : faBars}
              className="w-6 h-6"
            />
          </button>

          {/* Center: logo */}
          <Link to="/" className="flex items-center font-bold text-xl gap-2">
            <img className="max-h-12 w-auto" src={Logo} alt="Logo" />
          </Link>

          {/* Right: cart */}
          <div className="relative">
            <Link to="/cart" aria-label="Cart">
              <FontAwesomeIcon icon={faShoppingCart} className="w-6 h-6" />
              <span className="absolute -top-2 -right-3 bg-red-500 text-xs rounded-full w-5 h-5 flex justify-center items-center">
                {cartItems.length}
              </span>
            </Link>
          </div>
        </div>

        {/* DESKTOP: full nav */}
        <div className="hidden md:flex items-center justify-between w-full">
          {/* Left: logo */}
          <Link to="/" className="flex items-center font-bold text-xl gap-2">
            <img className="max-h-12 w-auto" src={Logo} alt="Logo" />
          </Link>

          {/* Middle: search */}
          <div className="w-1/3">
            <SearchBar />
          </div>

          {/* Right: links + cart */}
          <ul className="flex gap-4 items-center">
            <li>
              <Link to="/" className="hover:text-green-400 transition">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-green-400 transition">About</Link>
            </li>
            <li className="relative">
              <Link to="/cart" className="hover:text-green-400 transition">
                <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
                <span className="absolute -top-2 -right-3 bg-red-500 text-xs rounded-full w-5 h-5 flex justify-center items-center">
                  {cartItems.length}
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* MOBILE DROPDOWN */}
        <ul
          className={`
            flex-col gap-2
            absolute top-16 left-0 w-1/2 bg-gray-800 text-left pl-5 py-2
            transition-all duration-300 z-50
            ${menuOpen ? 'flex' : 'hidden'}
            md:hidden
          `}
        >
          <li>
            <Link to="/" className="block py-2 hover:text-green-400" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" className="block py-2 hover:text-green-400" onClick={() => setMenuOpen(false)}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
 
  )
}
// hello test
export default Navbar