import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router";

export function PrivateRoute(){
    var isLoggedIn = sessionStorage.getItem("un")?true:false;
    const location = useLocation();
    useEffect(()=>{
        if(!isLoggedIn)
            sessionStorage.setItem("route","/products")
    },[])
    return(
            isLoggedIn?<Outlet/>:<Navigate state={{from:location}} to="./login"/>
    )
}