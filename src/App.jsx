import React from 'react'
import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Login } from './Pages/Login';
import { CartLog } from './Pages/CartLog';
import { Footer } from './Components/Footer/Footer';
import clothes_banner from './Components/Assets/clothes_banner.png'
import interior_banner from './Components/Assets/interior_banner.png'
import accessories_banners from './Components/Assets/accessories_banners.png'


const App = () => {
  return (
    <div >  
    <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/clothes' element={<ShopCategory banner={clothes_banner} category='clothes'/>}/>
        <Route path='/accessory' element={<ShopCategory banner={accessories_banners} category='accessory'/>}/>
        <Route path='/interiors' element={<ShopCategory banner={interior_banner} category='interiors'/>}/>
        <Route path='/product' element={<Product/>}>

          <Route path=':productId' element={<Product/>}/>

        </Route>
        <Route path='/cart' element={<CartLog/>}/> 
        <Route path='/login' element={<Login/>}/>
       </Routes>
       <Footer/>


    </BrowserRouter>
    
     
    </div>
  )
}

export default App


