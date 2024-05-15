import { useState } from "react";
import { ProductModel } from "./ProductModel";
import './AddProduct.css';

function AddProduct(){
   
    const [product,setProduct] = useState(new ProductModel());
    var addProduct =()=>{
        console.log(product);
    }
    return(

        <div className="alert alert-primary addprod">
            <h1>Add New Product</h1>
            <hr/>
            <label className="form-control">Product Name</label>
            <input className="form-control" type="text" onChange={
                (e)=>{
                    setProduct(prevState=>({...prevState,title:e.target.value}))
                }
            }/>
             <label className="form-control">Product Price</label>
            <input className="form-control" type="text" onChange={
                (e)=>{
                    setProduct(prevState=>({...prevState,price:Number(e.target.value)}))
                }
            }/>
             <label className="form-control">Product Quantity</label>
            <input className="form-control" type="text" onChange={
                (e)=>{
                    setProduct(prevState=>({...prevState,stock:Number(e.target.value)}))
                }
            }/>
           
            <button className="btn btn-primary" onClick={addProduct}>Add Product</button>
        </div>
    );
}
export default AddProduct;