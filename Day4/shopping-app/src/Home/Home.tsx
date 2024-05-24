
import { useState } from "react";
import { Products } from "../ProductModule/Products";
import './Home.css';
import Cart from "./Cart";
import Login from "../Login/Login";

export default function Home(){
    var [cart,setCart] = useState([{}])
    var [name,setName] = useState("");

    var addToCart=(event:any)=>{
        setCart(prev=>[...prev,event])
    }
    var greetUSer=(event:any)=>{
        setName(event);
    }
    return(
        <div>
            <h1>Shopping App</h1>
            {
                name==""? <Login onUserLogedIn={greetUSer}/>:<h2>Welcome {name}</h2>
            }
            <div className="Home">
                <Products onAddCart={addToCart}/>
            </div>
            <div className="Home">
                {cart.length==1?
                    <h3 className="alert alert-danger">Start shopping</h3>
                    :
                    <div className="alert alert-primary">
                        <h3>Cart Items</h3>
                        {
                            cart.map((ci:any,idx)=>{
                                return(
                                    <Cart cartItem={ci}/>
                                )
                            })
                        }
                    </div>
                }

            </div>
        </div>
    )
    
}