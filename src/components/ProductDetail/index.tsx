import React from 'react'
import styles from "./ProductDetail.module.css"
import { useContextProducts } from '../../Hooks/useContextProducts'
import { ProductProps } from '../../interfaces/Product'
import ButtonAddToCart from '../ButtonAddToCart'

interface ProductDetailProps extends ProductProps {
  product?: ProductDetailProps
}

function ProductDetail( {product}:ProductDetailProps) {

    const{setIsProductDetailOpen, setIsCheckoutSideMenuOpen, productToShow}=useContextProducts()


    const onClose = ()=>{
        setIsProductDetailOpen(false)
        setIsCheckoutSideMenuOpen(false)
    }

   return (
    <aside className={`${styles.product_detail} flex flex-col fixed right-0 border border-black rounded-lg bg-white overflow-y-scroll`}>
        <div className='flex justify-between items-center p-1'>
            <h2 className='font-medium text-xl'>
                Details
            </h2> 

            <div onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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
            {productToShow && 
             <ButtonAddToCart product={productToShow} buttonText={true}/>
            }
           
    </aside>
  )
}

export default ProductDetail