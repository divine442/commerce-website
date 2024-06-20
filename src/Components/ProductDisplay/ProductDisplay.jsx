import React, { useContext } from 'react'

import  './ProductDisplay.css'

import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { Shopcontext } from '../../Context/Shopcontext'


export const ProductDisplay = (props) => {

  const{product} = props;
  const {addToCart} = useContext(Shopcontext)

  return (
    <div className='productdisplay flex'>
      <div className='product-left flex gap-5'>
          <div className='product-ig-list flex flex-col gap-5'>
            <img src={product.image} alt=''/>
            <img src={product.image} alt=''/>
            <img src={product.image} alt=''/>
            <img src={product.image} alt=''/>
          </div>
          <div className='productdisplay-img '>
            <img className='productdisplay-main-img' src={product.image} alt='' />
          </div>
      </div>
      <div className='product-right flex flex-col '>
          <h1>{product.name}</h1>
          <div className='productdisplay-right flex items-center'>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_dull_icon} alt=''/>
            <p>(122)</p>
          </div>
          <div className='productdisply-right-prices'>
            <div className='productdisplay-old-prices line-through'>${product.old_price}</div>
            <div className='productdisplay-new-prices'>${product.new_price}</div>
          </div>
          <div className='productdisplay-description'>
            An Outfit inspired by designers for anime enthustists and worn for either fashion or costumes.

          </div>
          <div className='productdisplay-size'>
            <h1>Select Size</h1>
            <div className='productdisplay-sizes flex'>
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          <button onClick={()=>{addToCart(product.id)}} className=' border-none boder-white rounded-xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'>ADD TO CART</button>
          <p className='productdisplay-right-category'><span>Category :</span> T-shirts, Bracelets, Interiors</p>
          <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
      </div>
    </div>
  )
}
