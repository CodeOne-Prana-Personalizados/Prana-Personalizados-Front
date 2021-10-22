import {Link} from 'react-router-dom';
import Footer from 'components/Footer';
import React, {useState} from "react";
import Venta from "../services/ventas";
import http from "../http-common";
import PrivateRoute from 'components/PrivateRoute';
import HeaderP from 'components/HeaderP';

const AgregarVenta = () => {

    const [input, setInput] =useState({
        id_venta: 0,
        id_cliente: 0,
        nombre_cliente: "",
        vendedor: "",
        fecha_venta: "",
        estado_venta:"",
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
                                        <div className = "cuadroValorTotal cuadroTabla infoAgregarVenta inputAgregarventa"><select  onChange={handleChange} name="vendedor" value={input.vendedor} name="vendedor">
                                        <option selected value="0"> Elige una opción </option>
                                        <option value="1">Estefania Cano</option> 
                                        <option value="2">Vanessa Quiroz</option> 
                                        </select></div>
                                    </li>
                                    </form>

                                    <form action="ejemplo.php" method="get">
                                    <li className = "tablaVenta2">

                                        <div className = "cuadroTabla cuadroBlanco letraEncabezado">Fecha </div>
                                        <div className = "cuadroValorTotal cuadroTabla infoAgregarVenta inputAgregarventa"><input type="date" onChange={handleChange} name="fecha_venta" value={input.fecha_venta}/></div>
                                        <div className = "cuadroTabla cuadroBlanco  letraEncabezado">Nombre del Cliente</div>
                                        <div className = "cuadroValorTotal cuadroTabla infoAgregarVenta inputAgregarventa" ><input type="text" onChange={handleChange} name="nombre_cliente" size="40" value={input.nombre_cliente} /></div>
                                        <div className = "cuadroTabla cuadroBlanco letraEncabezado">Estado de la Venta</div>
                                        <div className = "cuadroValorTotal cuadroTabla infoAgregarVenta inputAgregarventa"><select  onChange={handleChange} name="estado" value={input.estado_venta} name="estado">
                                            <option selected value="0"> Elige una opción </option>
                                            <option value="1">En proceso</option> 
                                            <option value="2">Cancelada</option> 
                                            <option value="2">En tregada </option> 
                                            </select>
                                        </div>
                                    </li>
                                    </form>

                                </div>
                            </ul>
                        </section>
                        <div className = "botonAgregarProducto botonModulos titulo centrar"><span>Agregar Productos</span></div>

                        <section>
                            <div className= "tablaNumeroProductos">
                                <div className = "cuadroTabla cuadroBlanco letraEncabezado">Producto 1</div>
                                <div className = "cuadroTabla infoAgregarVenta inputAgregarventa"><select name="estado">
                                    <option selected value="0"> Elige una opción </option>
                                    <option value="1">Cuaderno</option> 
                                    <option value="2">llavero</option> 
                                    <option value="2">Base celular </option> 
                                    <option value="2">Agenda</option> 
                                    <option value="2">Planeador</option> 
                                    <option value="2">Mug</option> 
                                    <option value="2">Calendario</option> 
                                    <option value="2">Lapicero</option> 
                                </select></div>
                                <div className = "cuadroTabla cuadroBlanco letraEncabezado">Valor Unitario</div>
                                <div className = "cuadroTabla">--</div>
                                <div className = "cuadroTabla cuadroBlanco letraEncabezado">Cantidad</div>
                                <div className = "cuadroTabla infoAgregarVenta inputAgregarventa inputAgregarventa" ><input type="number" name="Cantidad"/></div>
                                <div className = "cuadroTabla cuadroBlanco letraEncabezado">Valor Total</div>
                                <div className = "cuadroTabla ">--</div>
                                
                                <div className = "cuadroTabla cuadroBlanco letraEncabezado">Producto 2</div>
                                <div className = "cuadroTabla infoAgregarVenta inputAgregarventa inputAgregarventa"><select name="estado">
                                    <option selected value="0"> Elige una opción </option>
                                    <option value="1">Cuaderno</option> 
                                    <option value="2">llavero</option> 
                                    <option value="2">Base celular </option> 
                                    <option value="2">Agenda</option> 
                                    <option value="2">Planeador</option> 
                                    <option value="2">Mug</option> 
                                    <option value="2">Calendario</option> 
                                    <option value="2">Lapicero</option> 
                                </select></div>
                                <div className = "cuadroTabla cuadroBlanco letraEncabezado">Valor Unitario</div>
                                <div className = "cuadroTabla">--</div>
                                <div className = "cuadroTabla cuadroBlanco letraEncabezado">Cantidad</div>
                                <div className = "cuadroTabla infoAgregarVenta inputAgregarventa" ><input type="number" name="Cantidad"/></div>
                                <div className = "cuadroTabla cuadroBlanco letraEncabezado">Valor Total</div>
                                <div className = "cuadroTabla ">--</div>
                            </div>
                        </section>
                        
                        <section className = "tablaValorTotal">
                            <div className = "tablaValorTotal cuadroValorTotal letraEncabezado">Valor total de la compra</div>
                            <div className = "cuadroTabla letraEncabezado">--</div>
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
