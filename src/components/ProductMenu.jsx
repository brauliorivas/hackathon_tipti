import SupabaseController from '../util/api/supabase/database';
import '../styles/ProductMenu.css';
import { useState, useContext } from 'react';
import CartContext from '../context/Cart';

function ProductMenu({ product, setSelectedProduct }) {
    const { cart, setCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(0);

    const supabaseController = SupabaseController();
    const availableAmount = product.stock;
    const imageUrl = supabaseController.getImage(product.photo);

    function close() {
        setSelectedProduct(null);
    }

    function increaseQuantity() {
        if (quantity <= availableAmount) setQuantity(quantity + 1);
    }

    function decreaseQuantity() {
        if (quantity > 0) setQuantity(quantity - 1);
    }

    function addToCart() {
        if (quantity > 0) {
            const newProduct = {
                product_id: product.product_id,
                product_name: product.product_name,
                price: product.price,
                quantity: quantity,
                photo: product.photo,
                stock: product.stock
            }

            const newCart = [...cart];
            newCart.push(newProduct);
            console.log(newCart)
            setCart(newCart);
            setSelectedProduct(null);
        }
    }

    return (
        <div className="product-modal">
            <div onClick={close}>
                <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#000000" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"></path>
                </svg>
            </div>
            <div className='product-menu-header'>
                <h1>{product.product_name}</h1>
                <p>Precio: ${product.price}</p>
                <p>Cantidad disponible: {availableAmount}</p>
            </div>
            <img src={imageUrl} alt="product image" style={{ width: 100, height: 100 }} />
            <div className="quantity-buttons">
                <button type="button" className="decrement-btn" onClick={decreaseQuantity}>-</button>
                <div id="counter-value">{quantity}</div>
                <button type="button" className="increment-btn" onClick={increaseQuantity}>+</button>
            </div>

            <button type="button" onClick={addToCart}>Agregar al carrito</button>
        </div>
    )
}

export default ProductMenu;