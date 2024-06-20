import React from 'react'
import './DescriptionBox.css'


export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='Descriptionbox-navigator '>
            <div className='descriptionbox-navbox flex items-center justify-center text-base font-semibold '>Description</div>
            <div className='descriptionbox-navbox fade flex items-center justify-center text-base font-semibold '>Reviews(122)</div>
        </div>
        <div className='descriptionbox-description flex flex-col'>
            <p> An e-commerce website is an online platform that facilitates buting and selling
                of products or services over the internet. It serves as a virtual market place 
                where businesses and individuals showcase their products, interact with customers,
                and conduct transcations without the nedd for a physical presence. E-commerce websites
                have gained immense popularity due to their covenien accessibility, and the global reach
                they offer.</p>

            <p> E-comerce websites typiclly display products or services and detailed descriptions, images,
                prices and any available variants(e.g, sizes, colors). Each product usually has its own description
                with relevant information </p>
        </div>
    </div>
  )
}
