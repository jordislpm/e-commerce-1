import { NavLink } from "react-router-dom"
import { useContextProducts } from "../../Hooks/useContextProducts"


function NavBar() {
    const {count,setIsCheckoutSideMenuOpen, isCheckoutSideMenuOpen} = useContextProducts();

    const openCloseCartSide = ()=>{
        // if(!isCheckoutSideMenuOpen){
        //     setIsCheckoutSideMenuOpen(!isCheckoutSideMenuOpen)
        // }
        setIsCheckoutSideMenuOpen(!isCheckoutSideMenuOpen)
   
    }

    const activeStyle = "underline underline-offset-4"

  return (
    <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light bg-amazonBlue" >
        <ul className="flex items-center gap-3">
            <li className="font-semibold text-lg text-white">
                <NavLink to="/">
                      MyStore 
                </NavLink>
            </li>
            <li className="text-white">
                <NavLink 
                to="/"
                className={({isActive})=>
                isActive ? activeStyle : undefined
                }>
                      All 
                </NavLink>
            </li>
            <li className="text-white">
                <NavLink 
                to="/clothes"
                className={({isActive})=>
                isActive ? activeStyle : undefined
                }>
                      Clothes  
                </NavLink>
            </li>
            <li className="text-white">
                <NavLink 
                to="/electronics"
                className={({isActive})=>
                isActive ? activeStyle : undefined
                }>
                      Electronics 
                </NavLink>
            </li>
            <li className="text-white">
                <NavLink 
                to="/jewelery"
                className={({isActive})=>
                isActive ? activeStyle : undefined
                }>
                      Jewelery
                </NavLink>
            </li>
            <li className="text-white">
                <NavLink 
                to="/furnitures"
                className={({isActive})=>
                isActive ? activeStyle : undefined
                }>
                      Furnitures 
                </NavLink>
            </li>
            <li className="text-white">
                <NavLink 
                to="/toys"
                className={({isActive})=>
                isActive ? activeStyle : undefined
                }>
                      Toys 
                </NavLink>
            </li>
            <li className="text-white">
                <NavLink 
                to="/others"
                className={({isActive})=>
                isActive ? activeStyle : undefined
                }>
                      Others 
                </NavLink>
            </li>
        </ul>
        <ul className="flex items-center gap-3">
            <li>
                <a className="text-white/60" href="https://jordis.dev/" target="_blank">
                jordis.dev
                </a>
            </li>
            <li className="text-white">
                <NavLink 
                to="my-orders"
                className={({isActive})=>
                isActive ? activeStyle : undefined
                }>
                      My Orders 
                </NavLink>
            </li>
            <li className="text-white">
                <NavLink 
                to="my-account"
                className={({isActive})=>
                isActive ? activeStyle : undefined
                }>
                      My Account 
                </NavLink>
            </li>
            <li className="text-white">
                <NavLink to="signin"
                className={({isActive})=>
                isActive ? activeStyle : undefined
                }>
                     Sign in
                </NavLink>
            </li>
            <li onClick={openCloseCartSide} className="flex cursor-pointer text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>

                {count}
            </li>
        </ul>
    </nav>
  )
}

export default NavBar