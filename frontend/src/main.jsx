import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Hero from './components/HeroS/Hero.jsx'
import CartContextProvider from './context/CartContextProvider.jsx'
import Checkout from './components/Checkout/Checkout.jsx'
import Account from './components/AccountSection/AccountSection.jsx'
import ShowOrders from './components/Orders/ShowOrders.jsx'
import LoginSecurity from './components/LoginSecurity/LoginSecurity.jsx'
import Address from './components/Address/Address.jsx'
import CheckLogedProvider from './context/CheckLogedContext.jsx'
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
        path: '/Checkout',
        element: <Checkout />
      }
      ,
      {
        path: '/Account',
        element: <Account />
      },
      {
        path: '/Orders',
        element: <ShowOrders />
      }
      ,
      {
        path: '/Address',
        element: <Address />
      }
    ]

  },
  {

    path: '/Login',
    element: <LoginSecurity />

  }

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContextProvider>
      <CheckLogedProvider>
        <RouterProvider router={router} />
      </CheckLogedProvider>
    </CartContextProvider>


  </StrictMode>,
)
