import { Link } from "react-router-dom";
import SupabaseController from "../util/api/supabase/database";
import { useState, useEffect } from "react";
// Create a single supabase client for interacting with your database

function Explore() {
    const [stores, setStores] = useState(null);
    const supabaseController = SupabaseController();

    useEffect(() => {
        async function getStores() {
            const stores = await supabaseController.getStores();
            setStores(stores);
        }
        getStores();
    }, []);

    return (
        <>
            <ul>Tiendas</ul>
            <div>
                {stores && stores.map(store => 
                    <Link to={`/store/${store.store_spline_id}`}>
                        <div>
                            <h1>{store.store_name}</h1>
                        </div>
                    </Link>
                )}
            </div>
        </>
    );
}

export default Explore;