import {Link} from 'react-router-dom';
import Footer from 'components/Footer';
import React, {useState} from "react";
import Ventas from "../services/venta";
import http from "../http-common";
import { useLocation } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';
import HeaderP from 'components/HeaderP';

const VerVenta =(props) =>{

    const location = useLocation()
    console.log(location)

    let i_id_venta=location.state.id_venta;
    let i_id_cliente=location.state.id_cliente;
    let i_nombre_producto=location.state.nombre_producto;
    let i_nombre_cliente=location.state.nombre_cliente;
    let i_vendedor=location.state.vendedor;
    let i_fecha_venta=location.state.fecha_venta;
    let i_estado_venta=location.state.estado_venta;
    let i_valor_venta=location.state.valor_venta;
    let i_cantidad=location.state.cantidad;
    let i_valor_total=location.state.valor_total;
    
    let editing = false;
  
  /*  if (props.location.state ) {
        editing = true;*/
   /*const [viejaInfo, setViejaInfo] = useState({
        i_id_producto : props.location.state.id_producto,
        i_valor_unitario : props.location.state.valor_unitario,
        i_estado : props.location.state.estado,
        i_descripcion : props.location.state.descripcion
    });
      /*}*/
    
      const [nuevaInfo, setNuevaInfo] = useState({
        id_venta: i_id_venta,
        id_cliente: i_id_cliente,
        nombre_producto: i_nombre_producto,
        nombre_cliente: i_nombre_cliente,
        vendedor: i_vendedor,
        fecha_venta: i_fecha_venta,
        estado_venta: i_estado_venta,
        valor_venta: i_valor_venta,
        cantidad: i_cantidad,
        valor_total: i_valor_total,
      });
    const [submitted, setSubmitted] = useState(false);
  
    const handleInputChange = event => {
          const {name, value} = event.target;
          setNuevaInfo(prevInput => {
              return {
                  ...prevInput,
                  [name]: value
              }
          })
          console.log(event.target);
    };
  
    const saveVenta = () => {
      var data = {
        id_venta: nuevaInfo.id_venta,
            id_cliente: nuevaInfo.id_cliente,
            nombre_producto: nuevaInfo.nombre_producto,
            nombre_cliente: nuevaInfo.nombre_cliente,
            vendedor: nuevaInfo.vendedor,
            fecha_venta: nuevaInfo.fecha_venta,
            estado_venta: nuevaInfo.estado_venta,
            valor_venta: nuevaInfo.valor_venta,
            cantidad: nuevaInfo.cantidad,
            valor_total: nuevaInfo.valor_total,        
      };
  
     
        Ventas.updateVenta(data)
          .then(response => {
            setSubmitted(true);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    
    };
    
    return(
        <div className="EditarUsuario">
            <PrivateRoute>
                <body>
                    <HeaderP nombreBuscador='Buscar Venta' linkModulo= '/listadoVentas' nombreModulo = "Administración de Ventas"/>    
                    <main>
                        <section>
                            <h1 className = "tituloVentas">Información de Venta</h1>
                            
                            <ul>
                                <div className="tablaVentasProducto">
                                    <form action="ejemplo.php" method="get">
                                    <li className= "tablaVenta2">
                                        <p className = "cuadroTabla cuadroBlanco letraEncabezado">ID Venta</p>
                                        <div className = "cuadroValorTotal cuadroTabla infoAgregarVenta inputAgregarventa" > <input type="number" onChange={handleInputChange} name="id_venta" size="40" value={nuevaInfo.id_venta} readOnly="readonly" /></div>
                                        
                                        <div className = "cuadroTabla cuadroBlanco letraEncabezado">ID del Cliente</div>
                                        <div className = "cuadroValorTotal cuadroTabla infoAgregarVenta inputAgregarventa" ><input type="number" onChange={handleInputChange} name="id_cliente" size="40" value={nuevaInfo.id_cliente} readOnly="readonly" /></div>

                                        <div className = "cuadroTabla cuadroBlanco letraEncabezado ">Vendedor</div>
                                        <div  className = "cuadroValorTotal cuadroTabla infoAgregarVenta inputAgregarventa"> <div className = "cuadroValorTotal cuadroTabla infoAgregarVenta inputAgregarventa" > <input type="text" onChange={handleInputChange} name="vendedor" size="40" value={nuevaInfo.vendedor} readOnly="readonly" /></div></div>
                                    </li>

                                    
                                    </form>

                                    <form name='datos' method='post' action='grabar.php'>
                                    <li className = "tablaVenta2">

                                        <div className = "cuadroTabla cuadroBlanco letraEncabezado">Fecha </div>
                                        <div className = "cuadroValorTotal cuadroTabla infoAgregarVenta inputAgregarventa"><input type="date" onChange={handleInputChange} name="fecha_venta" value={nuevaInfo.fecha_venta} readOnly="readonly" /></div>
                                        <div className = "cuadroTabla cuadroBlanco  letraEncabezado">Nombre del Cliente</div>
                                        <div className = "cuadroValorTotal cuadroTabla infoAgregarVenta inputAgregarventa" ><input type="text" onChange={handleInputChange} name="nombre_cliente" size="40" value={nuevaInfo.nombre_cliente} readOnly="readonly" /></div>
                                        <div className = "cuadroTabla cuadroBlanco letraEncabezado">Estado de la Venta</div>
                                        <div className = "cuadroValorTotal cuadroTabla infoAgregarVenta inputAgregarventa"><input type="text" onChange={handleInputChange} name="estado_venta" value={nuevaInfo.estado_venta} readOnly="readonly" /></div>
                                    </li>
                                    </form>

                                </div>
                            </ul>
                        </section>

                        <section>
                            <div className= "tablaNumeroProductos">
                                <div className = "cuadroTabla cuadroBlanco letraEncabezado">Producto</div>
                                <div className = "cuadroTabla infoAgregarVenta inputAgregarventa"><input type="text" onChange={handleInputChange} name="nombre_producto" value={nuevaInfo.nombre_producto} readOnly="readonly" /></div>
                                <div className = "cuadroTabla cuadroBlanco letraEncabezado">Valor Unitario</div>
                                <div className = "cuadroTabla infoAgregarVenta inputAgregarventa"><input type="number" onChange={handleInputChange} name="valor_venta" value={nuevaInfo.valor_venta} readOnly="readonly" /></div>
                                <div className = "cuadroTabla cuadroBlanco letraEncabezado">Cantidad</div>
                                <div className = "cuadroTabla infoAgregarVenta inputAgregarventa"><input type="number" onChange={handleInputChange} name="cantidad" value={nuevaInfo.cantidad} readOnly="readonly" /></div>

                                

                            </div>
                        </section>
                        
                        <section className = "tablaValorTotal">
                            <div className = "tablaValorTotal cuadroValorTotal letraEncabezado">Valor total de la compra</div>
                            <div className = "cuadroTabla infoAgregarVenta inputAgregarventa"><input onChange={handleInputChange} name="valor_total" value={nuevaInfo.valor_total} readOnly="readonly" /></div>
                        </section>
                        <section>
                        <div className = "botonAgregarVenta botonModulos titulo centrar"><Link to='/listadoVentas' className="link"> <span>Regresar</span></Link></div>
                        </section>
                    </main>
                    <Footer />
                </body>
            </PrivateRoute>
        </div>
    );
}
export default VerVenta;
