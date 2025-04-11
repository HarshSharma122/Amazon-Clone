import { Outlet } from 'react-router-dom'

import Footer from './components/footer/Footer'
import Header from './components/Header/Header'

function App() {
  return ( 
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
