import { ProductModel } from "./ProductModel";


const Product=()=>{
let name="Ramu";
let prod = new ProductModel(101,"Pencil",5.5,10,"");


return(
    <section>
        {/* <!--Interpollation--> */}
        <div className="alert alert-success">
            Product Id:{prod.id}
            <br/>
            Product Name: {prod.name}
            <br/>
            Product Price: ${prod.price}
            <br/>
            Product stock in hand: {prod.quantity}
           
        </div>
    </section>
)
}

export default Product;