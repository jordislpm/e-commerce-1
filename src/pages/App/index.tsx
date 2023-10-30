
import {useRoutes, BrowserRouter} from "react-router-dom"
import Home from "../Home"
import MyAcoount from '../MyAccount'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Signin from '../Signin'
import './App.css'
import NavBar from "../../components/NavBar"


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
   return (
      <BrowserRouter>
          <NavBar/>
          <AppRoutes/>
      </BrowserRouter>

   
  )
}

export default App
