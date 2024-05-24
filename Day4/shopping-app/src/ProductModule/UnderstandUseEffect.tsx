import { useEffect, useState } from "react"

export function UnderstandUseEffect(){
    const [name,setName] = useState("Hello")
    useEffect(()=>{
        console.log("Changed")
    },[name])
    const triggerChange =()=>{
        setName("Welcome")
        console.log("In the buton click method "+name)
    }
    return (
        <div>
            <button onClick={triggerChange}>Change</button>
        </div>
    )
}