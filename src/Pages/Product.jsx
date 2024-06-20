import React, { useContext } from 'react'
import { Shopcontext } from '../Context/Shopcontext'
import { useParams } from 'react-router-dom'
import { Breadcrum } from '../Components/Breadcrums/Breadcrum'
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay'
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox'
import { RelatedProduct } from '../Components/RelatedProduct/RelatedProduct'

export const Product = () => {
  const {all_product} = useContext(Shopcontext)
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product = {product}/>
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  )
}