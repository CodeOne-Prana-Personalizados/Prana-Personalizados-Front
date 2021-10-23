import {Link} from 'react-router-dom';
import Footer from 'components/Footer';
import HeaderP from 'components/HeaderP';
import iconoGranaje from "media/ruedaConfiguración.png";
import PrivateRoute from 'components/PrivateRoute';
import { useAuth0 } from "@auth0/auth0-react";

const InfoVentas=() => {



    return(
        <div className="infoVentas">
            <PrivateRoute>
                <body>
                    <HeaderP nombreBuscador='Buscar Venta' linkModulo= '/listadoVentas' nombreModulo = "Administración de Ventas"/>
                        <main>
                            <section>
                                <h1 className = "tituloVentas">Ventas <img className="boton icoTablaVentas" src={iconoGranaje} /></h1>
                                <ul>
                                    <div className="tablaVentas">
                                        <li className= "tablaVenta1"><div className = "cuadroTabla cuadroBlanco letraEncabezado">ID Venta</div>
                                        <div className = "cuadroValorTotal cuadroTabla">001</div>

                                        <div className = "cuadroTabla cuadroBlanco letraEncabezado">ID del Cliente</div>
                                        <div className = "cuadroValorTotal cuadroTabla" >025</div>
                                        
                                        <div className = "cuadroTabla cuadroBlanco letraEncabezado ">Vendedor</div>
                                        <div className = "cuadroValorTotal cuadroTabla">Vanessa Quiroz</div></li>
                                        
                                        <li className= "tablaVenta1"><div className = "cuadroTabla cuadroBlanco letraEncabezado">Fecha</div>
                                            <div className = " cuadroValorTotal cuadroTabla">29/09/2021</div>
                                            <div className = "cuadroTabla cuadroBlanco  letraEncabezado">Nombre del Cliente</div>
                                            <div className = "cuadroValorTotal cuadroTabla" >Franca Gómez</div>
                                            <div className = "cuadroTabla cuadroBlanco letraEncabezado">Estado de la Venta </div>
                                            <div className = "cuadroValorTotal cuadroTabla">En proceso</div>
                                        </li>

                                </div>
                                </ul>
                            </section>
                            <section>
                                <div className= "tablaNumeroProductos">
                                    <div className = "cuadroTabla cuadroBlanco letraEncabezado">Producto 1</div>
                                    <div className = "cuadroTabla">Cuaderno</div>
                                    <div className = "cuadroTabla cuadroBlanco letraEncabezado">Valor Unitario</div>
                                    <div className = "cuadroTabla">55.000</div>
                                    <div className = "cuadroTabla cuadroBlanco letraEncabezado">Cantidad</div>
                                    <div className = "cuadroTabla" > 1 </div>
                                    <div className = "cuadroTabla cuadroBlanco letraEncabezado">Valor Total</div>
                                    <div className = "cuadroTabla ">55.000</div>
                                    
                                    <div className = "cuadroTabla cuadroBlanco letraEncabezado">Producto 2</div>
                                    <div className = "cuadroTabla ">Cuaderno</div>
                                    <div className = "cuadroTabla cuadroBlanco letraEncabezado">Valor Unitario</div>
                                    <div className = "cuadroTabla ">55.000</div>
                                    <div className = "cuadroTabla cuadroBlanco letraEncabezado">Cantidad</div>
                                    <div className = "cuadroTabla " > 1 </div>
                                    <div className = "cuadroTabla cuadroBlanco letraEncabezado">Valor Total</div>
                                    <div className = "cuadroTabla ">55.000</div></div>
                            </section>
                            <section className = "tablaValorTotal">
                                <div className = "tablaValorTotal cuadroValorTotal letraEncabezado">Valor total de la compra</div>
                                <div className = "cuadroTabla letraEncabezado">$110.000</div>
                            </section>
                        </main>
                    <Footer />
                </body>
            </PrivateRoute>
        </div>
    );
}
export default InfoVentas;

