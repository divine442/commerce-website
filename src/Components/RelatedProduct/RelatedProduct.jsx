import React from 'react'
import './RelatedProduct.css'
import data_product from '../Assets/data'
import { Items } from '../items/Items'

export const RelatedProduct = () => {
  return (
    <div className='relatedproduct flex flex-col items-center'>
        <h1>Related Products</h1>
        <hr/>
        <div className='product-item '>
            {data_product.map((item,i)=>{
                return <Items  key={i} id = {item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}
