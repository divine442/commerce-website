import React, { useContext, useState } from 'react'
import './Navbar.css'
import cart_icon from '../Assets/cart_icon.png'


import '@fontsource/twinkle-star';
import { Link } from 'react-router-dom';
import { Shopcontext } from '../../Context/Shopcontext';


export const Navbar = () => {

const [menu, setMenu] =useState("home")
const {gettotalCartItems} = useContext(Shopcontext)

  return (
    <div className='navbar '>
      <div className='nav-logo'>
        <svg height="40" width="200" xmlns="http://www.w3.org/2000/svg">
          <text x ="4" y="36" fill="grey" stroke='black' fontSize="35"> Dees'sMerch</text>
        </svg>
        
      </div>   
      <ul className='nav-menu'>
          <li onClick={()=>{setMenu("home")}}><Link to='/'>Home</Link>{menu ==="home"? <hr className='hover:bg-sky-500 '/> : <></>}</li>
          <li onClick={()=>{setMenu("clothes")}}><Link to='/clothes'>Clothes</Link>{menu ==="clothes"? <hr className='hover:bg-sky-500'/> : <></>}</li>
          <li onClick={()=>{setMenu("accessory")}}><Link to='/accessory'>Accessory</Link>{menu ==="accessory"? <hr className='hover:bg-sky-500'/> : <></>}</li>
          <li onClick={()=>{setMenu("interiors")}}><Link to='/interiors'>Interiors</Link>{menu ==="interiors"? <hr className='hover:bg-sky-500'/> : <></>}</li>
      </ul> 
      <div className='login-cart'>
        <Link  to='/login'><button className='border boder-gray-50  py-2 px-4 rounded-full'>Login </button></Link>
        <Link to='/cart'> <img src={cart_icon}/></Link>
        <div className='nav-cart-count'>{gettotalCartItems()}</div>
      </div>
     </div>
  )
}
