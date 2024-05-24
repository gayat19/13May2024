import { useEffect, useState } from "react";
import { ProductModel } from "./ProductModule/ProductModel";


export function ProductsDropDoen(props:any){
    var [productss,setProducts] = useState([new ProductModel()])
    var [product,setProduct] = useState(new ProductModel());
    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then(data=>data.json())
        .then((p)=>{
        setProducts(p.products);
        })
    },[])
   
    var showProduct=(event:any)=>{
        for (let index = 0; index < productss.length; index++) {
            if(productss[index].id==event.target.value)
                {
                    setProduct(productss[index])
                    break;
                }
        }
    }
    return(
        <div>
            <hr/>
            {
                (productss[0].price ==0)?
                <div className="spinner-border text-success" role="status">
                     <span className="sr-only"></span>
                </div>:
                <div>
                 <select onChange={showProduct}>
                    <option value="0">--Select a product ---</option>
                    {
                    productss.map((prod,idx)=>{
                        return(
                            <option key={idx} value={prod.id}>{prod.title}</option>
                    )
                    })
                }
                 </select>
             </div>
            }
           {
            product.title?<div>
                <h2> {product.title}</h2>
                <img src={product.thumbnail} height="100" width="100"/>
                <br/>
                Available @Rs.{product.price} also {product.stock} nos. available

        </div>:null
           }
        </div>
    );
}