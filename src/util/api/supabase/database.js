import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://aotfwsxkljvqjnsckobf.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function SupabaseController() {
    async function getStores() {
        let { store, error } = await supabase.from('store').select('*');
        return store;
    }

    async function getStoreById(id) {
        let { data } = await supabase.from('store').select('*').eq('store_spline_id', id);
        return data[0];
    }

    async function getProducts() {
        let { data, error } = await supabase.from('product').select('*');
        return data;
    }

    async function getProductById(id) {
        
    }

    function getImage(imagePath) {
        const { data } = supabase.storage.from('images').getPublicUrl(imagePath);
        return data.publicUrl;
    }

    return {
        getStoreById,
        getImage,
        getProducts,
    }
}

export default SupabaseController;