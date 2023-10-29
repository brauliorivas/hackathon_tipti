import { useContext } from 'react';
import CartItem from '../components/CartItem';
import CartContext from '../context/Cart';
import '../styles/Cart.css';
import { Link } from 'react-router-dom';

function Cart() {
    const { cart, setCart } = useContext(CartContext);

    const total = cart.reduce((acc, product) => {
        return acc + (product.price * product.quantity)
    }, 0);

    function setFinalCart() {
        console.log(cart)

        setCart(
            {
                products: cart,
                total: total
            }
        );
    }

    return (
        <div className='cart'>
            <div className='items'>
                {cart.map((product, index) => {
                    return (
                        <CartItem key={index} product={product} />
                    )
                })}
            </div>
            <Link to='/checkout'>
                <button className='checkout' onClick={setFinalCart}>Pagar ${total}</button>
            </Link>
        </div>
    )

}

export default Cart;