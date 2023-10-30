import React, { createContext,useState, ReactNode } from 'react';

// Define la estructura de los datos que se compartirán
interface MyData {
  value: string;
  count: number;
  
}

// Crea el contexto
export const MyContext = createContext<MyData | undefined>(undefined);

// Define un proveedor para el contexto
export function MyContextProductProvider({ children }: { children: ReactNode }) {
    const [count, setCount] = useState<number>(5)
  const data: MyData = {
    value: 'Datos compartidos',
    count: count,
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
