import Scene from "../components/Scene";
import { Link } from "react-router-dom";

import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://aotfwsxkljvqjnsckobf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvdGZ3c3hrbGp2cWpuc2Nrb2JmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg1MTU3NTgsImV4cCI6MjAxNDA5MTc1OH0.EcrRFzIBjnSRRSvUr9OGcqrklO6csZ6cdPD2pEzrbVQ')

let { data: stores, error } = await supabase
                                .from('store')
                                .select('*')

function Explore() {
    const itemsNames = stores.map(store =>
        <li key={store.store_id}>
            <button>
                {store.store_name}    
            </button>
        </li>
        );
        
    return (
        <>
            <ul>{itemsNames}</ul>
        </>
    );
}

export default Explore;