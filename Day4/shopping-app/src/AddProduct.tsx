import axios from "axios";
import { useState } from "react"

export function AddProduct(){
    const [product,setProduct] = useState({
        "title":"",
        "price":0
    });
    const [errors,setErrors] = useState();

    const validation = ()=>{
        let productErr:any = {};
        productErr.username = product.title?"":"title cannot be empty";
        productErr.password = product.price?"":"price cannot be empty";
        
        setErrors(productErr);
        return Object.values(productErr).every(c=>c==="");
    }
    const changeObject=(event:any)=>{
        var {name,value} = event.target;
        setProduct({...product,[name]:value});
    }

    const addProduct=()=>{
        console.log(validation())
        if(validation()==true)
        {
                axios.post("https://dummyjson.com/products/add",product)
                .then((data)=>{
                    alert("Product added");
                })
                .catch(err=>{
                    console.log(err)
                    alert("Something went wrong")
                })
        }
    }

    return(<div>
        <div>
            <label className="form-control">Product Name</label>
            <input name="title" className="form-control" type="text" value={product.title} onChange={changeObject}/>
            {errors?["username"]?<span>{errors["title"]}</span>:null:null}
            <label className="form-control">Price</label>
            <input name="price" className="form-control" value={product.price} type="number" onChange={changeObject}/>
            {errors?["password"]?<span>{errors["price"]}</span>:null:null} 
           
            <button className="btn btn-success" onClick={addProduct}>Login</button>
        </div>
    </div>)
}