import Layout from "../../components/Layout"
import Card from "../../components/Card"
import ProductDetail from "../../components/ProductDetail"
import { useContextProducts } from "../../Hooks/useContextProducts"
import { useEffect, useState } from "react"
import { ProductProps } from "../../interfaces/Product"
import EmptyCategory from "../../components/EmptyCategory"

 
function Others() {


    const {isProductDetailOpen, 
        isCheckoutSideMenuOpen,
        globalData,
        setGlobalData
    }=useContextProducts()

    const categories = [
      "clothes", 
      "men's clothing",
      "women's clothing",
      "electronics",
      "furnitures",
      "furniture",
      "jewelery",
      "toys"
  ]



   const dataOthers = globalData.filter((product)=>{

    if (product.category){
      return !categories.includes(product.category?.toLocaleLowerCase())
    } 
    })

    const [data, setData] = useState<ProductProps[]>([]) 


  return (
    <Layout>
        {dataOthers.length < 1 && <EmptyCategory/>}
    <div className="grid gap-1 grid-cols-4 w-full max-w-screen-lg">
        {dataOthers?.map((product) => (
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

    {isProductDetailOpen && <ProductDetail/>}
  </Layout>
  )
}

export default Others