import { useState } from "react";
import { EmployeeModel } from "./EmployeeModel";
import { Employee } from "./Employee";

export default function Employees(){
    const [employees,setEmployees] = useState([new EmployeeModel(101,"Ramu",34),new EmployeeModel(102,"Somu",29)]);

    return(
        <div>
            {employees.length==0?<div>No employees yet</div>:
                <div>
                {
                    employees.map((emp,idx)=>{
                        return(
                            <div key={idx}>
                                <Employee emp={emp}/>
                            </div>
                        )
                    })
                }
                </div>
            }
        </div>
    )
}