import { useState } from "react";
import { ProductModel } from "./ProductModel";
import  './ProductJSON';
import data from "./ProductJSON";

function ProductDataJson(){

var [products,setProducts] = useState(data)

return(
    <div>
        {
            products.map((prod,idx)=>{
                return(
                    <div key={idx}>
                        <h2> {prod.title}</h2>
                        <img src={prod.thumbnail} height="100" width="100"/>
                        <br/>
                        Available @Rs.{prod.price} also {prod.stock} nos. available

                 </div>  
                )
            })
        }
    </div>
)
}

export default ProductDataJson;