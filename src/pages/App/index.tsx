
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



const AppRoutes =()=>{
  const routes = useRoutes([
    {path: "/",element: <Home/>},
    {path: "/home",element: <Home/>},
    {path: "/my-orders",element: <MyOrders/>},
    {path: "/my-account",element: <MyAcoount/>},
    {path: "/signin",element: <Signin/>},
    {path: "/*",element: <NotFound/>},
  ])

  return routes
}

function App() {
  const {isCheckoutSideMenuOpen}= useContextProducts()
   return (
      <BrowserRouter>
          <NavBar/>
          <AppRoutes/>
          {isCheckoutSideMenuOpen && <CheckoutSideMenu/>}
      </BrowserRouter>

   
  )
}

export default App
