import React from 'react'

import './Newsletter.css'

export const Newsletter = () => {
  return (
    <div className='newsletter  bg-gradient-to-br from-sky-200 from-40%  to-slate-200 to-60% '>
        <h1>Get EXclusive Offers On Your Email</h1>
        <p> Subcribe to our newsletter and stay updated</p>
        <div >
            <input type='email' placeholder='Enter Email Address'/>
            <button className='bg-black text-slate-200'>Subcribe</button>
        </div>
    </div>
  )
}
