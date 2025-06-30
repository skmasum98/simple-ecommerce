import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { AppRoutes } from './routes/AppRoutes.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { SearchProvider } from './context/SearchContext.jsx'

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <SearchProvider>
      <RouterProvider router={AppRoutes}/>
    </SearchProvider>
  </CartProvider>
  
)
