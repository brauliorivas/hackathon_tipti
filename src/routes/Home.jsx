import { Link } from "react-router-dom";

function Home() {

    function getInto() {

    }

    return (
        <div>
            <h1>
                Bienvenido al Centro Comercial del Futuro
            </h1>
            
            <button>
                <Link to="/explore">Entrar al Mall del Futuro</Link>
            </button>
        </div>
    )
}

export default Home;