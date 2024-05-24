import { useEffect, useState } from "react";
import { ProductModel } from "./ProductModel";

export function Products(props:any){
    var [productss,setProducts] = useState([new ProductModel()])
    var [search,setSearch] = useState("")
    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then(data=>data.json())
        .then((p)=>{
        setProducts(p.products);
        })
    },[])
   
  var buyProduct=(event:any)=>{
    props.onAddCart(event);
  }
  const searchProducts =()=>{
        console.log(search)
        setProducts(productss.filter((prod)=>prod.title.toLowerCase().includes(search.toLowerCase())))
  }
  var serchStyle = {
    width:"300px",
    backgroundColor:"blue"
  }
    return(
        <div>
           <div style={serchStyle}>
                <input type="text" value={search} className="form-control" onChange={(event)=>setSearch(event.target.value)}/>
                <button className="btn btn-success" onClick={searchProducts}>Search</button>
           </div>
            <hr/>
            {
                (productss.length ==0)?
                <div className="spinner-border text-success" role="status">
                     <span className="sr-only"></span>
                </div>:
                <div>
                    {
                        productss.map((prod,idx)=>{
                            return(
                            <div key={idx}>
                                <h2> {prod.title}</h2>
                                <img src={prod["thumbnail"]} height="100" width="100"/>
                                <br/>
                                Available  {prod["stock"]} nos. 
                                <button className="btn btn-primary" onClick={(e)=>{
                                    buyProduct(prod);
                                }}>Buy @Rs.{prod["price"]}</button>
                        </div>  
                        )
                    })
                }
                </div>
            }
        </div>
    );
}