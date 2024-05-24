import { useEffect, useState } from "react"
import { EmployeeModel } from "./EmployeeModel";

export function Employee(props:any){
    const [employee,setEmployee] = useState(new EmployeeModel())
    useEffect(()=>{
        setEmployee(props.emp);
    })
    

    return(
        <div>
            {employee.id} - {employee["name"]} - {employee["age"]}
        </div>
    )
}