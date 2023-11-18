import React, { useEffect, useState } from 'react'
import { ProductProps } from '../../interfaces/Product'
import { useContextProducts } from '../../Hooks/useContextProducts'
import closeIcon from "../../../public/icons/closeIcon.svg"
import { checkIfIncluded } from '../../services/checkIfIncluded'
import ButtonAddToCart from '../ButtonAddToCart'


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



   const onDetail = ()=>{
        setProductToShow(product)
        setIsCheckoutSideMenuOpen(false)
        setIsProductDetailOpen(true);
    }

    const cutTitle = title && title.length > 30 ? title.split(" ").slice(0, 5).join(" ") + ' ...' : title;

//efetcs


useEffect(()=>{
    
    if (id){
        const validate = checkIfIncluded(id, shoppingCart)
        if (!validate){
            setIsInCart(false)
        } 
    }
},[shoppingCart, id])


  return (
    <div onClick={onDetail} className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
        <figure  className='relative mb-2 w-full h-4/5'>
            <span className='absolute bottom-0 left-0 bg-amazonGreen rounded-lg text-black text-xs m-2 px-3 py-0.5'>
               {`${category}`}
            </span>
            <img className='w-full h-full object-cover rounded-lg' src={image} alt={title}/>
            <div 
            className={`absolute top-0 right-0 flex `}
    
            >
                  <ButtonAddToCart product={product} buttonIcon={true}/>
            </div>
        </figure>
        <p className='flex justify-between'>
            <span className='text-sm font-light'>
           {cutTitle}
               
            </span>
            <span className='text-lg font-medium'>${price?.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
        </p>
    </div>
  )
}

export default Card