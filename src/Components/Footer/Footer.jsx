import React from 'react'
import './Footer.css'
import instagram_icon from '../Assets/instagram_icon.png'
import pininterest_icon from '../Assets/pininterest_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import twitter_icon from '../Assets/twitter_icon.jpg'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo flex item-center gap-5'>
        <svg height="40" width="200" xmlns="http://www.w3.org/2000/svg">
          <text x ="4" y="36" fill="grey" stroke='black' fontSize="35"> Dees'sMerch</text>
        </svg>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
                    
        </ul>
        <div className='footer-icon'>
        <div className='footer-container'>
        <img src={instagram_icon} alt=''/>

        </div>
        <div className='footer-container'>
        <img src={pininterest_icon} alt=''/>

        </div>
        <div className='footer-container'>
        <img src={whatsapp_icon} alt=''/>

        </div>
        <div className='footer-container'>
        <img src={twitter_icon} alt=''/>

        </div>

        </div>
        <div className='footer-copyright'>
            <hr/>
            <p>Copyright @ 2024 - All Rights Reserverd</p>
        </div>

    </div>
  )
}
