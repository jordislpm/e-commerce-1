import { useContext } from "react";
import { MyContext } from "../context/contextProducts";

export function useContextProducts() {


    const contextProducts = useContext(MyContext);
    if (contextProducts === undefined) {
      throw new Error('useContextProducts debe usarse dentro de un ContextProductsProvider');
    } 
    const { value,
        count,
        setCount,
        shoppingCart,
        setShoppingCart,
        isProductDetailOpen,
        setIsProductDetailOpen,
        productToShow,
        setProductToShow,
        addProductToCart,
        isCheckoutSideMenuOpen,
        setIsCheckoutSideMenuOpen,
      }= contextProducts;



    return {value,
        count,
        setCount,
        shoppingCart,
        setShoppingCart,
        isProductDetailOpen,
        setIsProductDetailOpen,
        productToShow,
        setProductToShow,
        addProductToCart,
        isCheckoutSideMenuOpen,
        setIsCheckoutSideMenuOpen,
      };
  }