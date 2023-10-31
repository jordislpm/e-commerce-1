import React from 'react'
import styles from "./CheckoutSideMenu.module.css"
import { useContextProducts } from '../../Hooks/useContextProducts'
import { ProductProps } from '../../interfaces/Product'

interface CheckoutSideMenu extends ProductProps {
  
}

function CheckoutSideMenu( {title, id, category, price, description, image}:CheckoutSideMenu) {

    const{setIsProductDetailOpen, productToShow}=useContextProducts()


    const onClose = ()=>{
        setIsProductDetailOpen(false)
    }

   return (
    <aside className={`${styles.product_detail} flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
        <div className='flex justify-between items-center p-1'>
            <h2 className='font-medium text-xl'>
                My Order
            </h2> 

            <div className='cursor-pointer'onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
        <figure className=' flex justify-center px-2 h-60 py-0 '>
                <img className=' h-full  rounded-lg' 
                src={productToShow?.image} 
                alt={productToShow?.title} />
        </figure>
            <p className='flex flex-col p-2'>
                <span className='font-medium text-2xl  mb-1'>
                   ${productToShow?.price} 
                </span>
                <span className='font-medium text-md'>
                   {productToShow?.title} 
                </span>
                <span className='font-light text-sm'>
                   {productToShow?.description} 
                </span>
            </p>
    </aside>
  )
}

export default CheckoutSideMenu