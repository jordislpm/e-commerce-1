import React, { createContext,useState, ReactNode } from 'react';
import { ProductProps, orderProducts, DataProps } from '../../interfaces/Product';

// Define la estructura de los datos que se compartirán
interface MyData {
  value: string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  globalData: DataProps;
  setGlobalData: React.Dispatch<React.SetStateAction<DataProps>>;
  shoppingCart: ProductProps[];
  setShoppingCart: React.Dispatch<React.SetStateAction<ProductProps[]>>;
  isProductDetailOpen: boolean;
  setIsProductDetailOpen: React.Dispatch<React.SetStateAction<boolean>>;
  productToShow:null|ProductProps;
  setProductToShow:React.Dispatch<React.SetStateAction<null|ProductProps>>
  addProductToCart: (product:ProductProps)=> void;
  deleteProductToCart:  (id: number)=> void;
  isCheckoutSideMenuOpen:boolean;
  setIsCheckoutSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  order: orderProducts[];
  setOrder: React.Dispatch<React.SetStateAction<orderProducts[]>>;

}

export const MyContext = createContext<MyData | undefined>(undefined);


export function MyContextProductProvider({ children }: { children: ReactNode }) {

// products data

const [globalData, setGlobalData] = useState<DataProps>({
  data: [],
  isLoading: false,
  error: null
})

//shopping Cart Lenght
const [count, setCount] = useState<number>(0)
// shoping cart    
const [shoppingCart, setShoppingCart] = useState<ProductProps[]>([])
//product Detail  open/close  
const [isProductDetailOpen, setIsProductDetailOpen]= useState<boolean>(false)
//checkout side menu open/close  
const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen]= useState<boolean>(false)
//product Detail show Product
const [productToShow, setProductToShow]= useState<null|ProductProps>(null)

//shopping cart Order

const [order, setOrder]= useState<orderProducts[]>([])






//funtions
const addProductToCart = (product:ProductProps)=>{
    if (shoppingCart ){
      if(shoppingCart.some((elemento) => JSON.stringify(elemento) === JSON.stringify(product))){
        return
      }
 const temporalCart = [...shoppingCart]
 temporalCart.unshift(product)
 setShoppingCart(temporalCart)
    } else{
        setShoppingCart([product])
    }
setCount(count + 1)

}


const deleteProductToCart = (id: number)=>{
    if (shoppingCart && shoppingCart.length > 0){
     
   const temporalCart = shoppingCart.filter(item => item.id != id)
   setShoppingCart(temporalCart)
  setCount(count - 1)

}
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
    deleteProductToCart,
    isCheckoutSideMenuOpen,
    setIsCheckoutSideMenuOpen,
    order,
    setOrder,
    globalData,
    setGlobalData,
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
