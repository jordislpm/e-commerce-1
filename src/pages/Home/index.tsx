import Layout from "../../components/Layout"
import Card from "../../components/Card"
import { useDataApiPlatzi } from "../../Hooks/useDataApiPlatzi"
import { API_PlATZI_URL, API_FAKESTORE_URL } from "../../config/constants"
import { useDataApiFakeStore } from "../../Hooks/useDataApiFakeStore"
import ProductDetail from "../../components/ProductDetail"
import { useContextProducts } from "../../Hooks/useContextProducts"
import CheckoutSideMenu from "../../components/CheckoutSideMenu"



const Home = () => {

    const { data, isLoading, error } = useDataApiFakeStore(`${API_FAKESTORE_URL}/products`)
    const {isProductDetailOpen, isCheckoutSideMenuOpen}=useContextProducts()

  return (
    <Layout>
      <div className="grid gap-1 grid-cols-4 w-full max-w-screen-lg">
          {data?.map((product) => (
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