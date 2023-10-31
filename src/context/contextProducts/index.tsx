import React, { createContext,useState, ReactNode } from 'react';
import { ProductProps } from '../../interfaces/Product';

// Define la estructura de los datos que se compartirán
interface MyData {
  value: string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  shoppingCart: null| ProductProps[];
  setShoppingCart: React.Dispatch<React.SetStateAction<null| ProductProps[]>>;
  isProductDetailOpen: boolean;
  setIsProductDetailOpen: React.Dispatch<React.SetStateAction<boolean>>;
  productToShow:null|ProductProps;
  setProductToShow:React.Dispatch<React.SetStateAction<null|ProductProps>>
  addProductToCart: (product:ProductProps)=> void;
  isCheckoutSideMenuOpen:boolean;
  setIsCheckoutSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MyContext = createContext<MyData | undefined>(undefined);


export function MyContextProductProvider({ children }: { children: ReactNode }) {

//shopping Cart Lenght
const [count, setCount] = useState<number>(0)
// shoping cart    
const [shoppingCart, setShoppingCart] = useState<null|ProductProps[]>(null)
//product Detail  open/close  
const [isProductDetailOpen, setIsProductDetailOpen]= useState<boolean>(false)
//checkout side menu open/close  
const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen]= useState<boolean>(false)
//product Detail show Product
const [productToShow, setProductToShow]= useState<null|ProductProps>(null)






//funtions
const addProductToCart = (product:ProductProps)=>{
    if (shoppingCart){
 const temporalCart = [...shoppingCart]
 temporalCart.unshift(product)
 setShoppingCart(temporalCart)
    } else{
        setShoppingCart([product])
    }
setCount(count + 1)

}



  const data: MyData = {
    value: 'Datos compartidos',
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
    // Inicializa otras propiedades según tus necesidades
  };

  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
}








// import React, { createContext, ReactNode } from 'react';

// // Define la estructura de los datos que se compartirán
// interface MyData {
//   value: string;
// }

// interface contextProviderProps {
//     children: ReactNode
// }

// // Crea el contexto
// export const contextProducts = createContext<MyData | undefined>(undefined);

// // Define un proveedor para el contexto
// export function contextProductsProvider({children}: contextProviderProps) {
//   const data: MyData = {
//     value: 'Datos compartidos',
//     // Inicializa otras propiedades según tus necesidades
//   };

//   return <contextProducts.Provider value={data}>{children}</contextProducts.Provider>;
// }

// // Crea un hook personalizado para acceder al contexto
