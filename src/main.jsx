import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Menu from './pages/Menu.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout.jsx'
import ContactUs from './pages/ContactUs.jsx'
import { WishlistProvider } from './context/WishlistContext.jsx'
import Wishlist from './pages/Wishlist.jsx'
import { CartProvider } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<App />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/menu/wishlist" element={<Wishlist />} />
            </Route>
          </Routes>
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
