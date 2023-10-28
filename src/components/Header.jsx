import { Link } from "react-router-dom";

function Header() {
    return (
        <header>

            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/explore">Explorar</Link>
                    </li>
                    <li>
                        <Link to="/accout">Cuenta</Link>
                    </li>
                    <li>
                        <Link to="/chatbot">ChatBot</Link>
                    </li>
                    <li>
                        <Link to="/cart">Carrito</Link>
                    </li>
                </ul>

            </nav>

        </header>
    );
}

export default Header;