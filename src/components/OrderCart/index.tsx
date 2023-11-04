import React from 'react'
import { ProductProps } from '../../interfaces/Product'
import { useContextProducts } from '../../Hooks/useContextProducts'

interface OrderCartProps extends ProductProps{
product: ProductProps;

}



function OrderCart({id,price,image,title, product}:OrderCartProps) {


    const {deleteProductToCart}=useContextProducts()
    const cutTitle = title && title.length > 20 ? title.split(" ").slice(0, 3).join(" ") + '...' : title;
  
    const deleteProduct = (e: React.MouseEvent, product:ProductProps)=>{

        if (product.id){
            deleteProductToCart(product.id)
        }
          }

    return (
    <div className='flex justify-between items-center mb-2'>
        <div className='flex items-center gap-2'>
            <figure className='w-20 h-20'>
                <img 
                className='w-full h-full rounded-lg object-fill-cover' 
                src={image} alt={title}
                />
            </figure>
            <p className='text-sm font-light'>{cutTitle}</p>
        </div>
        <div className='flex items-center gap-2'>
            <p className='text-lg font-medium'>$ {price}</p>
            <div onClick={(e)=>{deleteProduct(e, product)}} className='cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 'cursor-pointer'">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </div>
        </div>
    </div>
  )
}

export default OrderCart