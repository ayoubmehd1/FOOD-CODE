import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import ExploreMenu from './Components/ExploreMenu/ExploreMenu'


const App = () => {
  return (
    
      <div className='app'>
     
       <Navbar />
       <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/order' element={<PlaceOrder/>}/>
       
       </Routes>
       
      </div>
    
  )
}

export default App
