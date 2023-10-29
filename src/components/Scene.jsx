import Spline from '@splinetool/react-spline';
import { useState, useEffect } from 'react';
import SupabaseController from '../util/api/supabase/database';
import ProductMenu from './ProductMenu';
import '../styles/Scene.css';

function Scene({ storeId }) {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const supabaseController = SupabaseController();

    function onMouseUp(e) {
        async function getProducts() {
            const products = await supabaseController.getProducts();
            const productSupabaseId = e.target.id;

            const product = products.find(product => product.supabase_id === productSupabaseId)
            setSelectedProduct(product);
        }
        getProducts();
    }

    return (
        <div className='game'>
            { selectedProduct && 
                <div className='product-menu'>
                    <ProductMenu product={selectedProduct} setSelectedProduct={setSelectedProduct}/> 
                </div>
            }
            <Spline
                scene={`https://prod.spline.design/${storeId}/scene.splinecode`} 
                onMouseUp={onMouseUp}
                className='spline'
            />
        </div>
    )

}

export default Scene;