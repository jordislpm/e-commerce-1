import React from 'react'
import styles from "./CheckoutSideMenu.module.css"
import { useContextProducts } from '../../Hooks/useContextProducts'
import { ProductProps } from '../../interfaces/Product'

interface CheckoutSideMenu extends ProductProps {
  
}


function CheckoutSideMenu( {title, id, category, price, description, image}:CheckoutSideMenu) {

    const{isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen, setIsProductDetailOpen, productToShow}=useContextProducts()


    const onClose = ()=>{
        setIsCheckoutSideMenuOpen(false)
        setIsProductDetailOpen(false)
    }

   return (
    <aside className={`${styles.checkout_aside_menu} flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
        <div className='flex justify-between items-center p-1'>
            <h2 className='font-medium text-xl'>
                My Orders
            </h2> 
            <div className='cursor-pointer'onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
    </aside>
  )
}

export default CheckoutSideMenu