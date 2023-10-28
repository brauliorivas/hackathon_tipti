import { useParams } from "react-router-dom";
import Store from "../routes/Store";
import '../styles/StoreHandler.css'

function StoreHandler(props) {
    const { storeId } = useParams();

    return (
        <>
            <h1>Store</h1>
            <p>Store ID: {storeId}</p>
            <Store storeId={storeId} />
        </>
    )
}

export default StoreHandler;