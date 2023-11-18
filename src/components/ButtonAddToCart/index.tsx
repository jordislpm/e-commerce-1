import React, { useState, useEffect } from 'react'
import { ProductProps } from '../../interfaces/Product'
import { useContextProducts } from '../../Hooks/useContextProducts'
import { checkIfIncluded } from '../../services/checkIfIncluded'

interface ButtonAddToCartProps{
    product: ProductProps;
    buttonIcon?: boolean;
    buttonText?: boolean
}

function ButtonAddToCart({product, buttonIcon, buttonText  }:ButtonAddToCartProps) {

const [isInCart, setIsInCart]= useState<boolean>(false)



    const {
        addProductToCart, 
        shoppingCart, 
        setIsCheckoutSideMenuOpen,
        setIsProductDetailOpen, 
        productToShow, 
        isCheckoutSideMenuOpen
    } =useContextProducts()



    const addProduct = (e: React.MouseEvent, product:ProductProps)=>{
        e.stopPropagation()
        let isInCart : boolean | undefined = undefined;
        if(shoppingCart){
            isInCart = shoppingCart?.filter(item => item.id === product.id).length > 0
        }
        if(isInCart){
           alert("This product is alredy in the cart")
        } else{
            addProductToCart(product)
            if(isCheckoutSideMenuOpen){
                setIsInCart(true)
            } else{
                setIsCheckoutSideMenuOpen(true)
                setIsProductDetailOpen(false);
                setIsInCart(true)
            }
          
        }
         }

             useEffect(()=>{
    
            if (product && product.id){
                const validate = checkIfIncluded(product.id, shoppingCart)
                if (!validate){
                    setIsInCart(false)
                } else{
                    setIsInCart(true)
                }
        
            }
          

        },[shoppingCart, product])

  return (
    <>
    {/* condicional render */}
    {buttonIcon 
    ? 
    
     <div 
     className={` cursor-pointer flex justify-center items-center ${isInCart ? "bg-amazonGreen cursor-auto" : " bg-amazonOrange"} w-6 h-6 rounded-full m-2 p-1 z-1`}
     onClick={(e)=>{addProduct(e,product)}}
     >
         {isInCart?
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
       </svg>
       
         :
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
         </svg>
         }
        
     </div>
  
  
:
<div 
className={`flex justify-center items-center  ${isInCart ? "bg-amazonGreen cursor-auto" : " bg-amazonOrange cursor-pointer"} gap-1 rounded-full m-2 p-1 z-1`}
onClick={(e)=>{addProduct(e,product)}}

>
{isInCart?
<p className='font-medium text-md'>added to cart</p>
  
  
    :
    <p className='font-medium text-md'>add to cart</p>
    }
    {isInCart?
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
  
  
    :
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
    }
   
</div>

}   

   
    </>

  )
}

export default ButtonAddToCart