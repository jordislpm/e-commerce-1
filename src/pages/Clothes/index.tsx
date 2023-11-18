import Layout from "../../components/Layout"
import Card from "../../components/Card"
import ProductDetail from "../../components/ProductDetail"
import { useContextProducts } from "../../Hooks/useContextProducts"
import { useEffect, useState } from "react"
import { ProductProps } from "../../interfaces/Product"
import EmptyCategory from "../../components/EmptyCategory"
import ErrorComponent from "../../components/ErrorComponent"
import LoadingComponent from "../../components/LoadingComponent"

 
function Clothes() {


    const {isProductDetailOpen, 
        isCheckoutSideMenuOpen,
        globalData,
        setGlobalData
    }=useContextProducts()

   const dataClothes = globalData?.data.filter((product)=>{
    
        if (product.category?.indexOf("clothe") !== -1
        || product.category?.indexOf("men's clothing") !== -1
        || product.category?.indexOf("women's clothing") !== -1
        ){
            return true
        }
    })

    const [data, setData] = useState<ProductProps[]>([]) 

if(globalData.error){
  console.log(globalData.error)
  console.log(globalData.isLoading)
  console.log(globalData.data)
}
  return (
    <Layout>
    <div className="grid gap-1 grid-cols-4 w-full max-w-screen-lg">
        {dataClothes?.map((product) => (
      <Card 
      product={product}
      key={product.id}
      title={product.title}
      price={product.price}
      image={product.image}
      category={product.category}
      id={product.id}
      />
      ))}
    </div>  
    {!globalData.error && !globalData.isLoading && dataClothes.length < 1 ? <EmptyCategory/> : ""}
    {globalData.error  && <ErrorComponent/>}   
    {globalData.isLoading  && <LoadingComponent/>} 
    {isProductDetailOpen && <ProductDetail/>}
  </Layout>
  )
}

export default Clothes