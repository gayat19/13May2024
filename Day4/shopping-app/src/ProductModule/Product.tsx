import { useState } from "react";
import { ProductModel } from "./ProductModel";

function Product(){
    var productName = "Shirt"
    var product1 = {
        "title":"Pants",
        "id":101,
        "price":500,
        "stock":20,
        "thumbnail":"./logo512.png"
    }
    var product2 = new ProductModel(102,"Kurthi",345.5,3,"./images/change.png");
    
    // product2.id = 102;
    // product2.title = "Kurthi";
    // product2.price = 300.50;
    // product2.stock = 4;
    // var products = [product1,
    //                 product2,
    //                 new ProductModel(103,"Saree",780.4,2)]
    var [products,setProducts] = useState([product1,product2,
                   new ProductModel(103,"Saree",780.4,2,"./logo192.png")])
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
        {/* <p>{productName}</p>
        <p>
           <h2> {product1.title}</h2>
           Available @Rs.{product1.price} also {product1.stock} nos. available
        </p>
        <p>
           <h2> {product2.title}</h2>
           Available @Rs.{product2.price} also {product2.stock} nos. available
        </p> */}
        <button onClick={callAPI} className="btn btn-primary">Get Data</button>
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

export default Product;