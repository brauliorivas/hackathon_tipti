import Spline from '@splinetool/react-spline';
import { useRef } from 'react';

function Scene({ storeId }) {
    const object = useRef();

    function onLoad(spline) {
        const obj = spline.findObjectById('e138b12f-caa8-4612-ac8e-684b6b7e0e6c');

        object.current = obj;

        console.log(object.current);
    }

    return (
        <Spline
            scene={`https://prod.spline.design/${storeId}/scene.splinecode`} 
            onLoad={onLoad}
        />
    )
}

export default Scene;