import { useParams } from "react-router"

export function Welcome(){
    var {un} = useParams();
    return(
        <div>
            <h1>Welcome - {un}</h1>
        </div>
    )
}