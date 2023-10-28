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
            // onMouseDown={() => {console.log('ghi')}}
        />
    )

    // function onMouseDown(e) {
    //     if (e.target.name === 'Cube') {
    //         console.log('I have been clicked!');
    //     }
    // }

    // return (
    //     <div>
    //         <Spline
    //             scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
    //             onMouseDown={onMouseDown}
    //         />
    //     </div>
    // );
}

export default Scene;