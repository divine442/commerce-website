import React from 'react'
import './Offers.css'

import exclusive from '../Assets/exclusive_image.png'

export const Offers = () => {
  return (
    <div className='offers h-3/5  bg-gradient-to-bl from-sky-200 from-40%  to-slate-200 to-60% '>
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>ONLY ON DEE'SMERCH</p>
            <button className=' border-none boder-white rounded-full px-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'> Check now</button>
        </div>
        <div className='offers-right  '>
            <img  src={exclusive} alt=''/>
        </div>
        
           
        
    </div>
    
  )
}
