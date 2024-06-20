import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import { Items } from '../items/Items'


export default function Popular() {
  return (
    <div className='popular'>
        <h1> New Arrivals  <hr className='w-57 h-1.5 rounded-xl bg-emerald-500'/> </h1>
        
        
        <div className='popular-item'>
            {data_product.map((item,i)=> {
                return <Items key={i} id = {item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}
