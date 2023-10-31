import React from 'react'
import { ProductProps } from '../../interfaces/Product'
import { useContextProducts } from '../../Hooks/useContextProducts'

interface CardInfo extends ProductProps{
    product:ProductProps
}

function Card({product, title, id, category, price, description, image}:CardInfo) {

  
    const {addProductToCart, setIsProductDetailOpen, setProductToShow}= useContextProducts()

    const addProduct = (e: React.MouseEvent, product:ProductProps)=>{
        e.stopPropagation()
        addProductToCart(product)
    }

    const onDetail = ()=>{
        setIsProductDetailOpen(true);
        setProductToShow(product)
    }

    const cutTitle = title && title.length > 30 ? title.split(" ").slice(0, 5).join(" ") + ' ...' : title;

  return (
    <div onClick={onDetail} className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
        <figure  className='relative mb-2 w-full h-4/5'>
            <span className='absolute bottom-0 left-0 bg-amazonGreen rounded-lg text-black text-xs m-2 px-3 py-0.5'>
               {`${category}`}
            </span>
            <img className='w-full h-full object-cover rounded-lg' src={image} alt={title}/>
            <div 
            className='absolute top-0 right-0 flex justify-center items-center bg-amazonOrange w-6 h-6 rounded-full m-2 p-1 z-1'
            onClick={(e)=>{addProduct(e,product)}}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
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