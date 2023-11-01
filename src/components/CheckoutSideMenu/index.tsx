import React from 'react'
import styles from "./CheckoutSideMenu.module.css"
import { useContextProducts } from '../../Hooks/useContextProducts'
import { ProductProps, orderProducts } from '../../interfaces/Product'
import OrderCart from '../OrderCart'
import { totalPrice } from '../../services/totalprice'

interface CheckoutSideMenu extends ProductProps {

}


function CheckoutSideMenu( {title, id, category, price, description, image}:CheckoutSideMenu) {

    const{
        isCheckoutSideMenuOpen, 
        setIsCheckoutSideMenuOpen, 
        setIsProductDetailOpen, 
        productToShow,
        shoppingCart,
        setShoppingCart,
        setOrder,
        order}=useContextProducts()



    const onClose = ()=>{
        setIsCheckoutSideMenuOpen(false)
        setIsProductDetailOpen(false)
    }

    const handleOrderCheckout = ()=>{

        if(shoppingCart.length > 0){
        const orderToAdd:orderProducts  ={
            date: "01.02.23",
            products: shoppingCart,
            totalProducts: shoppingCart.length,
            totalPrice:totalPrice(shoppingCart)
        }
setOrder([...order, orderToAdd])
console.log(order)
setShoppingCart([])
} else{
    alert("Add products in your order before")
}
    }

   return (
    <aside className={`${styles.checkout_aside_menu} flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
        <div className='flex justify-between items-center p-1 mb-6'>
            <h2 className='font-medium text-xl'>
                My Order
            </h2> 
            <div className='cursor-pointer'onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 'cursor-pointer'">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
        <div className='px-6 overflow-y-scroll'>
        {shoppingCart?.map((product) => (
        <OrderCart 
        product={product}
        key={product.id}
        title={product.title}
        price={product.price}
        image={product.image}
        category={product.category}
        id={product.id}
        />
        ))}
        </div>
        <div className='px-6 py-2'>
            <p className='flex justify-between items-center'>
                <span className='font-light'>Total:</span>
                <span className='font-medium text-2xl'>${totalPrice(shoppingCart)}</span>
            </p>
            <button className="w-full bg-amazonOrange py-3 my-2 text-white  rounded-lg" onClick={handleOrderCheckout}>
                Checkout
            </button>
        </div>
    </aside>
  )
}

export default CheckoutSideMenu