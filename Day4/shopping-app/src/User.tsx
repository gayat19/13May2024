import { useContext, useState } from "react"
import { UserContext } from "./Display";



export function User(){

    
    const user = useContext(UserContext)
    
    return(
        <div>
            <h1>User {user} </h1>
          
            
        </div>
    )
}