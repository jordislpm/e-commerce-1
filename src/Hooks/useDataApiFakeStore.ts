import { useState, useEffect } from 'react';
import { ProductPlatziProps, ProductProps } from '../interfaces/Product';
import { useContextProducts } from './useContextProducts';
  
export function useDataApiFakeStore(url: string) {

  const [data, setData] = useState<null|ProductProps[]>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  // const [data,setData]= useState<null|ProductProps[]>(null);

const{setGlobalData}=useContextProducts()
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        const resultMap = await result.map((product: ProductProps)=>{
          const productMap:ProductProps = {
            id:product.id,
            title:product.title,
            price:product.price,
            category:product.category,
            image:product.image,
            description:product.description,
          }
        return productMap
        });

        setData(resultMap);
        setGlobalData(resultMap)
      } catch (err) {
        // setError(err.message as string);
        setError("Error")
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, setGlobalData]);

  // let data = null;

  // if(dataPlatzi){
  //   data = dataPlatzi?.map((product)=>{
  //     const productMap:ProductProps = {
  //       id:product.id,
  //       title:product.title,
  //       price:product.price,
  //       category:product.category,
  //       image:product.image,
  //       description:product.description,
  //     }
  //   return productMap
  //   });

  // }
 
  return { data, isLoading, error };
}