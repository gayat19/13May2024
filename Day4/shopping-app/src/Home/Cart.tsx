function Cart(props:any){
    return(
        <div className="alert alert-primary">
           {
              props.cartItem.id>0?
              <div>
                    {props.cartItem.id}||{props.cartItem.title}||{props.cartItem.price}
              </div>:null
           }

        </div>
    )
}

export default Cart;