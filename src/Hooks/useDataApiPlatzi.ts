import { useState, useEffect } from 'react';
import { ProductPlatziProps, ProductProps, ProductPlatziPropsSecond } from '../interfaces/Product';
import { validateImage } from '../services/validateImage';
import { useContextProducts } from './useContextProducts';


  
export function useDataApiPlatzi(url: string) {

  const [data, setData] = useState<null|ProductPlatziProps[]>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // const [data,setData]= useState<null|ProductProps[]>(null);
const {setGlobalData}=useContextProducts()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        const resultMap = await result.map((product: ProductPlatziPropsSecond)=>{
          const productMap:ProductProps = {
            id:product.id,
            title:product.title,
            price:product.price,
            category: product.category.name,
            image:product.image,
            description:product.description,
          }
        return productMap
        });
        setGlobalData(resultMap)
        setData(resultMap);
      } catch (err) {
        // setError(err.message as string);
        setError("Error")
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, setGlobalData]);

  

  return { data, isLoading, error };
}