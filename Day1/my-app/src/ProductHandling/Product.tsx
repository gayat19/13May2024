import { useState } from "react";
import { ProductModel } from "./ProductModel";


const Product=()=>{
//let name="Ramu";
var [name,setName] = useState("Pencil");//hook to manage change in the value
var [price,setPrice] = useState(5.5);
var [quantity,setQuantity] = useState(10);
let prod = new ProductModel(101,name,price,quantity,"");
let [myProduct,setMyProduct] = useState(new ProductModel(0,"rrr"));

const changeClick =()=>{
    alert("You clicked change");
   // prod.name = "New Name";
    console.log(prod);
}
const changeName=(evntArg:any)=>{
    setName(evntArg.target.value);
    console.log(prod.name)
}
const changePrice=(evntArgs:any)=>{
    setPrice(evntArgs.target.value)
}
const changeProduct =(e:any)=>{
    const {name,value} = e.target;
    setMyProduct(prevState=>({...prevState,name:value}));
}
return(
    <section>
        {/* <!--Interpollation--> */}
        {/* Add a textbox and change product name Hint - onChange */}
        <input value={name} type="text" onChange={changeName}/>
        <input value={price} type="text" onChange={changePrice}/>
        <input value={quantity} type="number" onChange={
           (eventArgs)=>setQuantity(Number(eventArgs.target.value))
        }/>
         <div className="alert alert-success">
            <h2>MyProduct</h2>
            <hr/>
            <input value={myProduct.name} type="text" onChange={changeProduct}/>
         <input value={myProduct.price} type="text" onChange={
             (e)=>setMyProduct(prevState=>({...prevState,price:Number(e.target.value)}))
         }/>
        {/*<input value={quantity} type="number" onChange={
            (eventArgs)=>)
        }/> */}
        <hr/>
            
            Product Id:{myProduct.id}
            <br/>
            Product Name: {myProduct.name}
            <br/>
            Product Price: ${myProduct.price}
            <br/>
            Product stock in hand: {myProduct.quantity}
        </div>
        <div className="alert alert-success">
            <h2>Product</h2>
            Product Id:{prod.id}
            <br/>
            Product Name: {prod.name}
            <br/>
            Product Price: ${prod.price}
            <br/>
            Product stock in hand: {prod.quantity}
        </div>
        <button className="btn btn-success" onClick={changeClick}>Change</button>
    </section>
)
}

export default Product;