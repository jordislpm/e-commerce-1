import Layout from "../../components/Layout"
import Card from "../../components/Card"
import ProductDetail from "../../components/ProductDetail"
import { useContextProducts } from "../../Hooks/useContextProducts"
import CheckoutSideMenu from "../../components/CheckoutSideMenu"



const Home = () => {

  
    const {globalData, isProductDetailOpen, isCheckoutSideMenuOpen}=useContextProducts()

  return (
    <Layout>
      <div className="grid gap-1 grid-cols-4 w-full max-w-screen-lg">
          {globalData?.map((product) => (
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

export default Home