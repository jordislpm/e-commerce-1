import Layout from "../../components/Layout"
import Card from "../../components/Card"
import { useDataApiPlatzi } from "../../Hooks/useDataApiPlatzi"
import { API_PlATZI_URL, API_FAKESTORE_URL } from "../../config/constants"
import { useDataApiFakeStore } from "../../Hooks/useDataApiFakeStore"



const Home = () => {

  const { data, isLoading, error } = useDataApiPlatzi(`${API_PlATZI_URL}/products`)
  return (
    <Layout>
      <div className="grid gap-3 grid-cols-4 w-full max-w-screen-lg">
          {data?.map((product) => (
        <Card key={product.id}
        title={product.title}
        price={product.price}
        image={product.image}
        category={product.category}
        />
        ))}
      </div>
    </Layout>
  )
}

export default Home