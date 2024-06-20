import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { Shopcontext } from '../Context/Shopcontext'
import { Items } from '../Components/items/Items'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'


export const ShopCategory = (props) => {

  const {all_product} = useContext(Shopcontext)
  return (
    <div className='shopcategory'>
    
    <img className='banners'  src={props.banner}/>

    <div className='index-sort'>
      <p>
        <span>Showing 1-12</span> out of 32 products
      </p>
      <div className='catergory-sort flex w-30 justify-around'>
       Sort by <img src={dropdown_icon} alt=''/> 
      </div>
    </div>
    
    <div className='shopcategory-product'>
      {all_product.map((item,i)=> {
        if(props.category===item.category){
          return<Items  key={i} id = {item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        }
        else{
          return null
        }

      })}
    </div>
     <div className='load-more flex justify-center items-center w-52'>
      Explore More
     </div>
      
    </div>
  )
}
