
import {useRoutes, BrowserRouter} from "react-router-dom"
import Home from "../Home"
import MyAcoount from '../MyAccount'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Signin from '../Signin'
import './App.css'
import NavBar from "../../components/NavBar"
import CheckoutSideMenu from "../../components/CheckoutSideMenu"
import { useContextProducts } from "../../Hooks/useContextProducts"
import Clothes from "../Clothes"
import { useDataApiPlatzi } from "../../Hooks/useDataApiPlatzi"
import { API_PlATZI_URL, API_FAKESTORE_URL } from "../../config/constants"
import { useDataApiFakeStore } from "../../Hooks/useDataApiFakeStore"
import Electronics from "../Electronics"
import Jewelery from "../Jewelery"
import Furnitures from "../Furnitures"
import Toys from "../Toys"
import Others from "../Others"



const AppRoutes =()=>{
  const routes = useRoutes([
    {path: "/",element: <Home/>},
    {path: "/home",element: <Home/>},
    {path: "/my-orders",element: <MyOrders/>},
    {path: "/my-account",element: <MyAcoount/>},
    {path: "/signin",element: <Signin/>},
    {path: "/*",element: <NotFound/>},
    {path: "/clothes",element: <Clothes/>},
    {path: "/electronics",element: <Electronics/>},
    {path: "/jewelery",element: <Jewelery/>},
    {path: "/furnitures",element: <Furnitures/>},
    {path: "/toys",element: <Toys/>},
    {path: "/others",element: <Others/>},
  ])

  return routes
}

function App() {
  const {isCheckoutSideMenuOpen, globalData, setGlobalData}= useContextProducts()
  const { data, isLoading, error } = useDataApiFakeStore(`${API_FAKESTORE_URL}/products`)
  
  return (
      <BrowserRouter>
          <NavBar/>
          <AppRoutes/>
          {isCheckoutSideMenuOpen && <CheckoutSideMenu/>}
      </BrowserRouter>

   
  )
}

export default App
