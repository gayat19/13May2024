import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


export default function Login(props:any){

    const navigate = useNavigate();

    const [loginData,setLoginData] = useState({
        "username":"",
        "password":""
    })
    const [errors,setErrors] = useState();

    const validation = ()=>{
        let loginErr:any = {};
        loginErr.username = loginData.username?"":"Username cannot be empty";
        loginErr.password = loginData.password?"":"Password cannot be empty";
        loginErr.passwordLen=loginData.password?.length>3?"":"Password much be 3 chars long";
        setErrors(loginErr);
        return Object.values(loginErr).every(c=>c==="");
    }
    const handleChange=(event:any)=>{
        const {name,value} = event.target;
       setLoginData({...loginData,[name]:value})
      
    }

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    
    const checkUser=(event:any)=>{
        var errData = validation();
        //console.log(errors);
        if(errData)
       {
            axios.post("https://dummyjson.com/auth/login",loginData)
            .then((response)=>{
                console.log(response.data)
                sessionStorage.setItem("un",loginData.username);
                navigate("/welcome/"+loginData.username);
            }).catch((err)=>{
                alert(err.response.data.message)
            })
       }
       
    }
    return(
        <div>
            <label className="form-control">Username</label>
            <input name="username" className="form-control" type="text" value={loginData.username} onChange={handleChange}/>
            {errors?["username"]?<span>{errors["username"]}</span>:null:null}
            <label className="form-control">Password</label>
            <input name="password" className="form-control" value={loginData.password} type="password" onChange={handleChange}/>
            {errors?["password"]?<span>{errors["password"]}</span>:null:null} 
            {errors?["passwordLen"]?<span>{errors["passwordLen"]}</span>:null:null}
            <button className="btn btn-success" onClick={checkUser}>Login</button>
        </div>
    )
}