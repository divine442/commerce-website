import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/heroo.png'

export const Hero = () => {
  return (
    <div className='hero  h-screen bg-gradient-to-bl from-sky-200 from-40%  to-sky-500 to-60%  flex'>
        <div className='hero-left'>
            <h2>NEW ANIME MERCH ARRIVALS</h2>
            <div>
            <div className='hand_icon'>
                <p>new</p>
                <img src={hand_icon} alt=''/>
            </div>
            <p> Collections </p>
            <p> for fans</p>
            </div>

            <div className='latest-btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 '>
            <div> Latest Anime Merch</div>
            <img src={arrow_icon} alt=''/>
        </div>
        </div>
       
        <div className='hero-right'>
            <img className='h-screen' src={hero_image} alt=''/>
        </div>
        
    </div>
  )
}
