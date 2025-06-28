import React from 'react'
import { Link } from 'react-router'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'


function Navbar() {
  const { cartItems } = useContext(CartContext)
  return (
   <>
   
   <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">MyStore</Link>
      <ul className="flex gap-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li>
          <Link to="/cart" className="relative">
            Cart
            <span className="absolute -top-2 -right-3 bg-red-500 text-xs rounded-full w-5 h-5 flex justify-center items-center">
              {cartItems.length}
            </span>
          </Link>
        </li>
      </ul>
    </nav>

   </>

  )
}

export default Navbar