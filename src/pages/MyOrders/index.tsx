import React from 'react'
import Layout from '../../components/Layout'
import { useContextProducts } from '../../Hooks/useContextProducts'


const MyOrders = () => {

  const {order, setOrder}=useContextProducts()
  console.log(order)
  return (
    <Layout>
    <div>
      MyOrders
    </div>
    </Layout>
  )
}

export default MyOrders