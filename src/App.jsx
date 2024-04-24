import React from 'react'
import Header from './Components/Header/Header'
// import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
// import Offer from './Pages/Offer/Offer'
// import Service from './Pages/Service/Service'
// import Menu from './Pages/Menu/Menu'
// import About from './Pages/About/About'
// import Cart from './Pages/Cart/Cart'
import Footer from './Components/Footer/Footer'


const App = () => {
  
  return (
    <>
      <Header />
        <Home />
        {/* <Route path='/offer' element={<Offer />}/>
        <Route path='/service' element={<Service />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/cart' element={<Cart />}/> */}
      <Footer />
    </>
  )
}

export default App