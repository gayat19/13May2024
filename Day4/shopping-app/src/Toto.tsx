import axios from "axios"
import { useEffect, useState } from "react"

export function Todo(){
    const [todos,setTodos] = useState([]);
    const [todosf,setTodosf] = useState([]);
    useEffect(()=>{
        axios.get("https://dummyjson.com/todos")
        .then((data)=>setTodos(data.data.todos))
    },[])
    var filter =(event:any)=>{
        let choice = event.target.value;
        console.log(choice);
        if(choice==0)
            setTodosf(todos)
        if(choice==1)
            setTodosf(todos.filter(t=>t["completed"]==true))
        if(choice==2)
            setTodosf(todos.filter(t=>t["completed"]==false))
        
    }
    return(
        <div>
            <select onChange={filter}>
                <option value="0">All</option>
                <option value="1">Compelted</option>
                <option value="2">inComplete</option>
            </select>
            {
                todosf.map((todo,i)=>{
                    return(<div key={i} className="row g-3">
                    <div className="col-sm-7">
                        {todo["todo"]}
                    </div>
                    <div className="col-sm" >
                      {todo["completed"]?"Completed":"inComplete"}
                    </div>
                    <div className="col-sm">
                    {todo["userId"]}
                    </div>
                  </div>)
                })
            }
        </div>
    )
}