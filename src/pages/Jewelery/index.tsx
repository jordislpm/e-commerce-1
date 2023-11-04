import Layout from "../../components/Layout"
import Card from "../../components/Card"
import ProductDetail from "../../components/ProductDetail"
import { useContextProducts } from "../../Hooks/useContextProducts"
import { useEffect, useState } from "react"
import { ProductProps } from "../../interfaces/Product"
import EmptyCategory from "../../components/EmptyCategory"

 
function Jewelery() {


    const {isProductDetailOpen, 
        isCheckoutSideMenuOpen,
        globalData,
        setGlobalData
    }=useContextProducts()

   const dataJewelery = globalData.filter((product)=>{

        if (product.category?.toLowerCase() === "jewelery" ){
            return true
        }
    })

    const [data, setData] = useState<ProductProps[]>([]) 


  return (
    <Layout>
        {dataJewelery.length < 1 && <EmptyCategory/>}
    <div className="grid gap-1 grid-cols-4 w-full max-w-screen-lg">
        {dataJewelery?.map((product) => (
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

export default Jewelery