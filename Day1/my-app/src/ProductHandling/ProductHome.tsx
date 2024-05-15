import AddProduct from "./AddProduct";

import { ProductModel } from "./ProductModel";
import Products from "./Products";

function ProductHome(){

    return(
    <section className="alert alert-warning">
        <h1>Welcome to our shop</h1>
        <div className="row">
            <div className="col-sm-6 alert alert-success" >
                <AddProduct/>
            </div>
            <div className="col-sm-6 alert alert-danger" >
                <Products/>
            </div>
        </div>
    </section>);
}

export default ProductHome;