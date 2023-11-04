import { ProductProps } from './../interfaces/Product/index';

interface totalPriceParameter extends ProductProps{
    products: ProductProps;
}

/**
 * 
 * @param {Arrary} products 
 * @returns {number}
 */

export const totalPrice = (products: ProductProps[])=>{
    const suma: number = products.reduce((total, producto) => total + (producto.price ?? 0), 0);
    return suma ;
}