import { useContext } from "react";
import { MyContext } from "../context/contextProducts";

export function useContextProducts() {
    const contextProducts = useContext(MyContext);
    if (contextProducts === undefined) {
      throw new Error('useContextProducts debe usarse dentro de un ContextProductsProvider');
    }
    return {contextProducts};
  }