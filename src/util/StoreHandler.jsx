import { useParams } from "react-router-dom";
import Store from "../routes/Store";
import '../styles/StoreHandler.css'

import SupabaseController from "./api/supabase/database";
import { useState, useEffect } from "react";

function StoreHandler() {
    const [store, setStore] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const { storeId } = useParams();
    const supabaseController = SupabaseController();

    async function fetchStore(storeId) {
        const storeData = await supabaseController.getStoreById(storeId);

        if (storeData) {
            setImageUrl(supabaseController.getImage(storeData.logo));
            setStore(storeData);
        } else {
            console.log("No store found");
        }
    }

    useEffect(() => {
        fetchStore(storeId);
    }, []);

    return (
        <>
            {store ? 
                <div className="store">
                    <h1>{store.store_name}</h1> 
                    <img src={imageUrl} alt="store logo" style={{ width: 100 }} />
                </div>
                : null
            }
            <div className="store-wrapper">
                <Store storeId={storeId} />
            </div>
        </>
    )
}

export default StoreHandler;