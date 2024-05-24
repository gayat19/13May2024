
import { createContext, useState } from "react";
import { Details } from "./Details";
import { User } from "./User";

const UserContext = createContext("");

export function Display(){
    const[name,setName]=useState("Hello");
   

    return(
        <UserContext.Provider value={name}>
              <input type="text" value={name} className="form-control" onChange={(event)=>setName(event.target.value)}/>
           <div>
                <User/>
           </div>
           <div>
                <Details/>
           </div>
        </UserContext.Provider>
    )
}

export {UserContext} ;