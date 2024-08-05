import React from 'react'
import './NewCollections.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import {FreeMode,  Pagination} from 'swiper/modules'



import new_collection from '../Assets/new_collections'

export const NewCollections = () => {
  return (
    <div className='slides mb-26 flex item-center justify-center flex-col w-35 '>

    <div className='flex item-center justify-center pb-3'>
    <h1 > NEW COLLECTIONS  <hr className='w-57 h-1.5 rounded-xl bg-emerald-500'/></h1>
    
    </div>
   
    
  
    <Swiper 
    breakpoints={{
      340:{
        slidesPerView: 2,
        spaceBetween:15
      },
      700:{
        slidesPerView:4,
        spaceBetween:15
      }
    }}

    freeMode= {true}
    pagination ={{
      clickable:true
    }}
    
    
    modules={[FreeMode, Pagination]}
    className='max-w-[90%] lg:max-w-[80%]'
    
    >
    
      {new_collection.map((item)=> {
    
        return <SwiperSlide key={item.name} className='pt-9'>
       
          <div  className='flex  gap-3 mb-20 group relative shadow-lg rounded-xl px-6 py-10 h-[250px] w-[50px] lg:h-[290px] lg:w-[250px] overflow-hidden cursor-pointer'>
          <div   className='absolute inset-0  bg-cover bg-center'
          > <img src={item.image}/>

          </div>
          

          <div className=' absolute inset-0 bg-black opacity-10 group-hover:opacity-50 '/>

          <div  className='relative flex flex-col gap-3'>
          

          </div>
   
        

            

           

          </div>
          
        </SwiperSlide>
      })}

    </Swiper>
        {/* <h1> NEW NewCollections <hr/></h1>
        <div className='collections'>

        </div> */}
    </div>
  )
}
