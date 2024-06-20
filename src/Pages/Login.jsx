import React from 'react'
import './CSS/Login.css'

export const Login = () => {
  return (
    <div className='login-signup w-full bg-slate-100 '>
      <div className='loginsignup-container'>
        <h1> Sign Up</h1>
        <div className='fields'>
          <input  type='text' placeholder='Name'/>
          <input  type='email' placeholder='Email Address'/>
          <input  type='password' placeholder='Enter password'/>
          
        </div>
        <button className='border-none rounded-full'> Continue </button>

          <p className='loginsignup-login'> Already have an account? <span>Log in here</span></p>
          <div className='login-agree'>
            <input type='checkbox' name='' id=''/>
            <p> By Accepting, i agree to use the terms of use and privacy</p>
          </div>
      </div>
      
    </div>
  )
}
