import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
  return (
    <footer className="bg-black text-white mt-8">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className='text-left'>
          <h2 className="font-bold text-green-500 text-lg mb-2">THEWEBPAL</h2>
          <p className="text-sm">
            Your one-stop shop for quality products and great deals. Shop with confidence and enjoy fast delivery!
          </p>
        </div>
        <div className='text-left'>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/cart" className="hover:underline">Cart</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div className='text-left'>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">Email: support@thewebpal.com</p>
          <p className="text-sm">Phone: +1 234 567 890</p>
          <div className="flex gap-3 mt-2">
            <a href="#" aria-label="Facebook" className="text-blue-300 hover:text-blue-500">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400 text-blue-500">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-400 text-pink-500">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center py-3 text-xs text-gray-400">
        &copy; {new Date().getFullYear()} <span className="font-semibold text-blue-400">thewebpal</span>. All rights reserved.
      </div>
    </footer>
  )
}
