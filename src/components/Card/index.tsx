import React, { useEffect, useState } from 'react'
import { ProductProps } from '../../interfaces/Product'
import { useContextProducts } from '../../Hooks/useContextProducts'
import closeIcon from "../../../public/icons/closeIcon.svg"

interface CardInfo extends ProductProps{
    product:ProductProps
}

function Card({product, title, id, category, price, description, image}:CardInfo) {

  const[isInCart, setIsInCart]=useState<boolean>(false)


    const {
        setIsCheckoutSideMenuOpen,
        isCheckoutSideMenuOpen ,
        addProductToCart, 
        setIsProductDetailOpen, 
        setProductToShow,
        shoppingCart,
    }= useContextProducts()



    const addProduct = (e: React.MouseEvent, product:ProductProps)=>{
        e.stopPropagation()
        let isInCart : boolean | undefined = undefined;
        if(shoppingCart){
            isInCart = shoppingCart?.filter(item => item.id === product.id).length > 0
        }
        if(isInCart){
           return
        } else{
            addProductToCart(product)
            setIsCheckoutSideMenuOpen(true)
            setIsProductDetailOpen(false);
            setIsInCart(true)
        }
         }

    const onDetail = ()=>{
        setProductToShow(product)
        setIsCheckoutSideMenuOpen(false)
        setIsProductDetailOpen(true);
    }

    const cutTitle = title && title.length > 30 ? title.split(" ").slice(0, 5).join(" ") + ' ...' : title;

//efetcs




  return (
    <div onClick={onDetail} className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
        <figure  className='relative mb-2 w-full h-4/5'>
            <span className='absolute bottom-0 left-0 bg-amazonGreen rounded-lg text-black text-xs m-2 px-3 py-0.5'>
               {`${category}`}
            </span>
            <img className='w-full h-full object-cover rounded-lg' src={image} alt={title}/>
            <div 
            className={`absolute top-0 right-0 flex justify-center items-center ${isInCart ? "bg-amazonGreen cursor-auto" : " bg-amazonOrange"} w-6 h-6 rounded-full m-2 p-1 z-1`}
            onClick={(e)=>{addProduct(e,product)}}
            >
                {isInCart?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              
                :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                }
               
            </div>
        </figure>
        <p className='flex justify-between'>
            <span className='text-sm font-light'>
           {cutTitle}
               
            </span>
            <span className='text-lg font-medium'>${price}</span>
        </p>
    </div>
  )
}

export default Card