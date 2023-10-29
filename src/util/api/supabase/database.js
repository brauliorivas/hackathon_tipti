import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://aotfwsxkljvqjnsckobf.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

function SupabaseController() {
    const supabase = createClient(supabaseUrl, supabaseKey);

    async function getStores() {
        let { store, error } = await supabase.from('store').select('*');
        return store;
    }

    async function getStoreById(id) {
        let { data } = await supabase.from('store').select('*').eq('store_spline_id', id);
        return data[0];
    }

    function getImage(imagePath) {
        const { data } = supabase.storage.from('images').getPublicUrl(imagePath);
        return data.publicUrl;
    }

    return {
        getStoreById,
        getImage,
    }
}

export default SupabaseController;