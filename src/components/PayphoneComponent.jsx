import { useEffect } from 'react';

function PayphoneComponent({ total }) {
    useEffect(() => {
        const script1 = document.createElement('script');
        script1.src = 'https://pay.payphonetodoesposible.com/api/button/js?appId=EYbpoTOyJ0W3XA80HMJP0w';
        script1.async = true;
    
        script1.onload = () => {
            const script2 = document.createElement('script');
            script2.textContent = `
            window.onload = function() {
                payphone.Button({
        
                    //token obtenido desde la consola de developer
                    token: "wVAq0exNkjDCpMegjGLrV_r6JZsNMO_8vVopk3ahw1aooCeHRzhuIDUoZJuzkZOGVNx9vdb4RDsdD1aagF1H_mQToTRzNTdp47ztqCMNIOOv386XNPx1y3WWkYX3VrZ2aXj_lJ8KOmLIOES5e3hFUw7aTG683BnWDlXR7ycoQl8P-EkYm9iVzTHL9Ta5hZymTQBgZJILa4ziDKuNfcj-qtgYEOxkLHrNFkN_4IwXk-PvLTf1gFm9PRJYw8py4O9u9OZbpZ1MBh6uu0QEZisdn5pSvbncTOkvVrrC--Fu32TkeWnxxv9Pf3R-VNSZ63x6cigptw",
        
                    //PARÁMETROS DE CONFIGURACIÓN
                    btnHorizontal: true,
                    btnCard: true,
        
                    createOrder: function(actions) {
                        //Se ingresan los datos de la transaccion ej. monto, impuestos, etc
        
                        return actions.prepare({
                            amount: ${total},
                            amountWithoutTax: 100,
                            currency: "USD",
                            clientTransactionId: "pruebasexpress",
                            lang: "es"
        
                        }).then(function(paramlog) {
                            console.log(paramlog);
                            return paramlog;
                        }).catch(function(paramlog2) {
                            console.log(paramlog2);
                            return paramlog2;
                        });
                    },
        
                    onComplete: function(model, actions) {
                        console.log("Modelo:");
                        console.log(model);
                    }
                }).render("#pp-button");
            }
            `;
            document.body.appendChild(script2);
        };
    
        document.body.appendChild(script1);
    
        return () => {
          // Limpiar los scripts si el componente se desmonta (opcional)
            document.body.removeChild(script1);
        };
    }, []);

    return (
        <div className="content-pay">
            <div id="pp-button"></div>
        </div>
    );
}

export default PayphoneComponent;