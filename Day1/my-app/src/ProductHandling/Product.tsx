import { useState } from "react";
import { ProductModel } from "./ProductModel";


const Product=(props:any)=>{

return(
    <section>
        <div className="alert alert-success">
            <h2>Product</h2>
            Product Id:{props.myProduct.id}
            <br/>
            Product Name: {props.myProduct.title}
            <br/>
            Product Price: ${props.myProduct.price}
            <br/>
            Product stock in hand: {props.myProduct.stock}
        </div>
    </section>
)
}

export default Product;