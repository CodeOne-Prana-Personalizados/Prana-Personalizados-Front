import {Link} from 'react-router-dom';
import Footer from 'components/Footer';
/*Se importa iconos necesarios para la página*/
import React, {useState} from "react";
import {useEffect} from "react";
import Ventas from "../services/venta";
import http from "../http-common";
import PrivateRoute from 'components/PrivateRoute';
import HeaderP from 'components/HeaderP';
import Usuarios from "../services/usuario";
import Productos from "../services/codeone";

const AgregarVenta = () => {

    const [input, setInput] =useState({
        id_venta: 0,
        id_cliente: 0,
        nombre_producto: "",
        nombre_cliente: "",
        vendedor: "",
        fecha_venta: "",
        estado_venta:"",
        valor_venta:0,
        cantidad:0,
        valor_total:0,
    }) 

    function handleChange(event){
        const {name, value} = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
        console.log(event.target);
    }

    function handleClic(event){
        event.preventDefault();
        http.post("/ventas", input);
        console.log(input);
    }



    return(
        <div classname="agregarVentas"> 
            <PrivateRoute>
                <body>
                    <HeaderP nombreBuscador='Buscar Venta' linkModulo= '/listadoVentas' nombreModulo = "Administración de Ventas"/>    
                    <main>
                        <section>
                            <h1 className = "tituloVentas"> Venta</h1>
                            
                            <ul>
                                <div className="tablaVentasProducto">
                                    <form action="ejemplo.php" method="get">
                                    <li className= "tablaVenta2">
                                        <p className = "cuadroTabla cuadroBlanco letraEncabezado">ID Venta</p>
                                        <div className = "cuadroValorTotal cuadroTabla infoAgregarVenta inputAgregarventa" > <input type="number" onChange={handleChange} name="id_venta" size="40" value={input.id_venta}/></div>
                                        
                                        <div className = "cuadroTabla cuadroBlanco letraEncabezado">ID del Cliente</div>
                                        <div className = "cuadroValorTotal cuadroTabla infoAgregarVenta inputAgregarventa" ><input type="number" onChange={handleChange} name="id_cliente" size="40" value={input.id_cliente}/></div>

                                        <div className = "cuadroTabla cuadroBlanco letraEncabezado ">Vendedor</div>
                                        <div  className = "cuadroValorTotal cuadroTabla infoAgregarVenta inputAgregarventa"> <div className = "cuadroValorTotal cuadroTabla infoAgregarVenta inputAgregarventa" > <input type="text" onChange={handleChange} name="vendedor" size="40" value={input.vendedor}/></div></div>
                                    </li>

                                    
                                    </form>

                                    <form name='datos' method='post' action='grabar.php'>
                                    <li className = "tablaVenta2">

                                        <div className = "cuadroTabla cuadroBlanco letraEncabezado">Fecha </div>
                                        <div className = "cuadroValorTotal cuadroTabla infoAgregarVenta inputAgregarventa"><input type="date" onChange={handleChange} name="fecha_venta" value={input.fecha_venta}/></div>
                                        <div className = "cuadroTabla cuadroBlanco  letraEncabezado">Nombre del Cliente</div>
                                        <div className = "cuadroValorTotal cuadroTabla infoAgregarVenta inputAgregarventa" ><input type="text" onChange={handleChange} name="nombre_cliente" size="40" value={input.nombre_cliente} /></div>
                                        <div className = "cuadroTabla cuadroBlanco letraEncabezado">Estado de la Venta</div>
                                        <div className = "cuadroValorTotal cuadroTabla infoAgregarVenta inputAgregarventa"><input type="text" onChange={handleChange} name="estado_venta" value={input.estado_venta}/></div>
                                    </li>
                                    </form>

                                </div>
                            </ul>
                        </section>

                        <section>
                            <div className= "tablaNumeroProductos">
                                <div className = "cuadroTabla cuadroBlanco letraEncabezado">Producto</div>
                                <div className = "cuadroTabla infoAgregarVenta inputAgregarventa"><input type="text" onChange={handleChange} name="nombre_producto" value={input.nombre_producto}/></div>
                                <div className = "cuadroTabla cuadroBlanco letraEncabezado">Valor Unitario</div>
                                <div className = "cuadroTabla infoAgregarVenta inputAgregarventa"><input type="number" onChange={handleChange} name="valor_venta" value={input.valor_venta}/></div>
                                <div className = "cuadroTabla cuadroBlanco letraEncabezado">Cantidad</div>
                                <div className = "cuadroTabla infoAgregarVenta inputAgregarventa"><input type="number" onChange={handleChange} name="cantidad" value={input.cantidad}/></div>

                                

                            </div>
                        </section>
                        
                        <section className = "tablaValorTotal">
                            <div className = "tablaValorTotal cuadroValorTotal letraEncabezado">Valor total de la compra</div>
                            <div className = "cuadroTabla infoAgregarVenta inputAgregarventa"><input onChange={handleChange} name="valor_total" value={input.valor_total} /></div>
                        </section>
                        <section>
                            <div onClick={handleClic} className = "botonAgregarVenta botonModulos titulo centrar"><Link to='/comprobanteAgregar' className="link"> <span>Agregar Ventas</span></Link></div>
                        </section>
                    </main>
                    <Footer />
                </body>
            </PrivateRoute>

        </div>
    );
}
export default AgregarVenta;
