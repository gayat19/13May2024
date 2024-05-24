import { useState } from "react";

export default function Child(props:any){
    const [username,setUsername] = useState("");

    const changeName=()=>{
       props.onNameChange(username);
    }
    
    return(
        <div>
            <h2> Child</h2>
            <input value={username} onChange={(e)=>{
                setUsername(e.target.value);

            }} type="text"/>
            <button onClick={changeName}>Change name in parent</button>
        </div>
    )
}