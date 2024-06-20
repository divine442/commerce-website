import react, { createContext, useState } from "react"
import all_product from '../Components/Assets/all_product'
import { Items } from "../Components/items/Items"


export const Shopcontext = createContext(null)

const getDefaultCart = ()=>{
    let cart = {}
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
        
    }
    return cart;
}




 const ShopcontextProvider =(props)=>{

   
        const [cartItems, setCartItems] = useState(getDefaultCart())
       
        
        const addToCart = (itemsId)=> {
            setCartItems((prev)=>({...prev,[itemsId]:prev[itemsId] + 1}))
            console.log(cartItems)
            
        }
    
        const removeFromCart = (itemsId)=> {
         setCartItems((prev)=>({...prev,[itemsId]:prev[itemsId]-1}))
        }

        const getTotalCart = ()=>{
            let totalAmount = 0;
            for(const item in cartItems)
                {
                    if(cartItems[item]>0)
                        {
                            let itemInfo = all_product.find((product)=> product.id===Number(item))
                            totalAmount += itemInfo.new_price * cartItems[item];
                        }
                       
                }
                return totalAmount
        }
    

        const gettotalCartItems = ()=>{
            let totalItem = 0
            for(const item in cartItems)
                {
                    if(cartItems[item]>0)
                        {
                            totalItem += cartItems[item]
                        }
                }
                return totalItem
            }

        const contextValue ={gettotalCartItems,getTotalCart,  all_product, cartItems,addToCart,removeFromCart};
   

    return(
        <Shopcontext.Provider value={contextValue}>
            {props.children}
        </Shopcontext.Provider>
    )
}

export default ShopcontextProvider;



