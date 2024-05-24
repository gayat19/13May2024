import { useState } from "react";
import Child from "./Child";

export default function Parent(){
    const [name,setName] = useState("Ramu");

    const changeParentName = (event:any)=>{
       setName(event);
    }
   
    return( 
        <div>
          Parent: {name}
            <hr/>
            <Child onNameChange={changeParentName}/>
        </div>
    );
}