import PayphoneComponent from "../components/PayphoneComponent"
import { useContext } from "react"
import CartContext from "../context/Cart"

function Checkout() {
    const { cart } = useContext(CartContext);

    return (
        <h1>
            Checkout
            <PayphoneComponent total={cart.total}/>
        </h1>
    )
}

export default Checkout