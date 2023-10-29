import Spline from '@splinetool/react-spline';

function Scene({ storeId }) {
    function onMouseUp(e) {
        console.log(e.target.id);
    }

    return (
        <Spline
            scene={`https://prod.spline.design/${storeId}/scene.splinecode`} 
            onMouseUp={onMouseUp}
        />
    )

}

export default Scene;