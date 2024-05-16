import { useState } from "react";
import { ProductModel } from "./ProductModel";

export function Products(){
    var [products,setProducts] = useState([new ProductModel()])
        var callAPI=()=>{
        fetch("https://dummyjson.com/products")
        .then(data=>data.json())
        .then((p)=>{
        setProducts(p.products);
        console.log(products)
        })
        }
    return(
        <div>
            <h1>Product Listing</h1>
            <button onClick={callAPI} className="btn btn-primary">Get Data</button>
            <hr/>
            {
                (products[0].price ==0)?
                <div className="spinner-border text-success" role="status">
                     <span className="sr-only"></span>
                </div>:
                <div>
                    <h2>Products</h2>
                    {
                        products.map((prod,idx)=>{
                            return(
                            <div key={idx}>
                                <h2> {prod.title}</h2>
                                <img src={prod["thumbnail"]} height="100" width="100"/>
                                <br/>
                                Available @Rs.{prod["price"]} also {prod["stock"]} nos. available
                        </div>  
                        )
                    })
                }
                </div>
            }
        </div>
    );
}