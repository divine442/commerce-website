import React, { useContext } from 'react'
import './Cartitems.css'
import { Shopcontext } from '../../Context/Shopcontext'
import remove_icon from '../Assets/cart_cross_icon.png'

export const Cartitems = () => {
  const{all_product, cartItems,removeFromCart, getTotalCart} = useContext(Shopcontext)
  return (
    <div className='Cartitem'>
        <div className='Cartitem-name'>
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr/>
        {all_product.map((e)=>{
            if(cartItems[e.id] > 0)
          {
           return <div>
          <div className='cartitems-format Cartitem-name'>
              <img src={e.image} alt='' className='cartitem-icon' />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className='cartitem-quantity border-none boder-white rounded-xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'>{cartItems[e.id]}</button>
              <p>${e.new_price*cartItems[e.id]}</p>
              <img className='remove-icon cursor-pointer' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt='' />
          </div>
          <hr/>
        </div>
          }
          return null
          })}

          <div className='classitem-down'>
            <div className='classitem-total'>
              <h1>Cart Totals</h1>
              <div>
                <div className='totalcart-items'>
                  <p>Subtotal</p>
                  <p>${getTotalCart()}</p>
                </div>
                <hr/>
                <div className='totalcart-items'>
                  <p>Shipping Cost</p>
                  <p>Free</p>
                </div>

                <hr/>

                <div className='totalcart-items'>
                  <h3>Total</h3>
                  <h3>${getTotalCart()}</h3>
                </div>
              </div>

              <button className=' w-2/4 h-16 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'>PROCEED TO CHECKOUT</button>
            </div>

            <div className='promocode'>
              <p> If you have a promo code, Enter it here</p>
              <div className='promobox'>
                <input type='text' placeholder='Enter code' />
                <button >Submit</button>
              </div>
            </div>
          </div>

      
  </div>
  )
}