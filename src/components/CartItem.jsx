import SupabaseController from "../util/api/supabase/database";
import '../styles/CartItem.css'

function CartItem({ product }) {
    const supabaseController = SupabaseController();
    const total = product.quantity * product.price;

    return (
        <div className="cart-item">
            <div className="image">
                <img src={supabaseController.getImage(product.photo)} alt={product.product_name} style={{ height: 50 }}/>
            </div>

            <div className="description">
                <p className="product-name">{product.product_name}</p>
                <p className="product-detail">{product.detail}</p>
            </div>

            <div className="amount">
                <p className="product-quantity">Quantity: {product.quantity}</p>
                <p className="product-price">Price: {product.price}</p>
            </div>

            <div className="total">
                <div className="product-total">Total: ${total}</div>
            </div>
        </div>
    )
}

export default CartItem;