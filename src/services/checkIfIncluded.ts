
import { ProductProps } from "../interfaces/Product";

export const checkIfIncluded = (id:number, array:ProductProps[])=>{

    const objetoEncontrado = array.some((objeto) => objeto.id === id);
    if(objetoEncontrado){
        return true
    } else {
        return false
    }
}