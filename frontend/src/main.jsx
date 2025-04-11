import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Hero from './components/HeroS/Hero.jsx'
import CartContextProvider from './context/CartContextProvider.jsx'
import Checkout from './components/Checkout/Checkout.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Hero />
      }
      ,
      {
        path:'/Checkout',
        element:<Checkout/>
      }

    ]
  },

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>


  </StrictMode>,
)
