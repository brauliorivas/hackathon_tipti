import { useParams } from "react-router-dom";
import Store from "../routes/Store";
import '../styles/StoreHandler.css'

function StoreHandler(props) {
    const { storeId } = useParams();

    return (
        <>
            <h1>Sukasa</h1> 
            <div className="store-wrapper">
                <Store storeId={storeId} />
            </div>
        </>
    )
}

export default StoreHandler;