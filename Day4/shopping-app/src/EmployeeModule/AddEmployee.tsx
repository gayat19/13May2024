import { useState } from "react";
import { EmployeeModel } from "./EmployeeModel";

function AddEmployee(){

const [employee,setEmployee] = useState(new EmployeeModel());

var changeModel=(event:any)=>{
    var {name,value} = event.target;
    setEmployee({...employee,[name]:value});
}
var addEmployee=()=>{

}

return(
    <div>
        <label className="form-control">Employee Id</label>
        <input type="number" name="id" value={employee.id} onChange={changeModel} className="form-control"/>
        <label className="form-control">Employee Name</label>
        <input type="text" name="name" value={employee.name} onChange={changeModel} className="form-control"/>
        <label className="form-control">Employee Age</label>
        <input type="number" name="age" value={employee.age} onChange={changeModel} className="form-control"/>
        <br/>
        <button className="btn btn-primary" onClick={addEmployee}>Add EMployee</button>
    </div>

);
}

export default AddEmployee;