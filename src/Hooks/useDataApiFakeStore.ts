import { useState, useEffect } from 'react';
import { ProductPlatziProps, ProductProps } from '../interfaces/Product';

  
export function useDataApiFakeStore(url: string) {

  const [dataPlatzi, setDataPlatzi] = useState<null|ProductProps[]>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  // const [data,setData]= useState<null|ProductProps[]>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setDataPlatzi(result);
      } catch (err) {
        // setError(err.message as string);
        setError("Error")
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  let data = null;

  if(dataPlatzi){
    data = dataPlatzi?.map((product)=>{
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

  }

  return { data, isLoading, error };
}