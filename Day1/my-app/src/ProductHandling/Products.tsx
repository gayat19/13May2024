
import { useState } from "react"
import Product from "./Product"
import { ProductModel } from "./ProductModel"

export default function Products(){
    let prods = [
        new ProductModel(101,"Pencil",5,10),
        new ProductModel(102,"Eraser",3,15),
        new ProductModel(103,"Sharpner",25,7)
    ]
    const [productsArray,setProductsArray] = useState([new ProductModel()]);
    const getData=()=>{
        fetch("https://dummyjson.com/products")
        .then((data)=>{
           return data.json()
        }).then(d=>{
            setProductsArray(d.products as ProductModel[]);
            //console.log(productsArray)
        })
    }
    return(
        <div>
            <h1>Product Listing</h1>
            <button onClick={getData} className="btn btn-success">Get Product Data</button>
            <hr/>
            {
                productsArray.map((p,i)=>{
                    return(<div key={i}>
                       <Product myProduct={p}/>
                    </div>)
                })
            }
        </div>
    )
}