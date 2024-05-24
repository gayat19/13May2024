import { useContext } from "react"
import { UserContext } from "./Display"


export function Details(){
    const user = useContext(UserContext)
    return(
       
        <div>
            <h1>Welcome -{user} </h1>
        </div>
    )
}