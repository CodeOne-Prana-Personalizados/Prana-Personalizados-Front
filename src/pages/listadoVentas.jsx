import {Link} from 'react-router-dom';
import Footer from 'components/Footer';
/*Iconos de editar o eliminar*/
import iconoGranaje from "media/ruedaConfiguración.png";
import iconoBasurero from "media/basurero.png";
import PrivateRoute from 'components/PrivateRoute';
import HeaderP from 'components/HeaderP';
import Ventas from "../services/venta";
import React, {useState, useEffect} from "react";

const ListadoVentas=()=>{


    const [ventas, setVentas] = useState([]);

    useEffect(() => {
        retrieveVentas();
      }, []);

    const retrieveVentas = () => {
        Ventas.getAll()
          .then(response => {
            console.log(response.data);
            setVentas(response.data.ventas);
            
          })
          .catch(e => {
            console.log(e);
          });
      };


      const deleteVentas =(id_venta)=> {
          Ventas.deleteVentas(id_venta)
          alert("Venta Eliminada")
      }


    return(
        <div className="listadoVentas">
            <PrivateRoute>
                <body>
                    <HeaderP nombreBuscador='Buscar Venta' linkModulo= '/listadoVentas' nombreModulo = "Administración de Ventas"/>
                        <main>
                            <h1 className = "tituloProductos">Listado de Ventas</h1>
                            <ul>                               
                                <div className= "tablaListaVentas">
                                <div className = "listadodeVentas letraEncabezado">ID Venta</div>
                                <div className = "listadodeVentas letraEncabezado">Cliente</div>
                                <div className = "listadodeVentas letraEncabezado">fecha</div>
                                <div className = "listadodeVentas letraEncabezado">Estado</div>
                                <div className = "listadodeVentas letraEncabezado">valor</div>
                                <div className = "listadodeVentas letraEncabezado">Editar</div>
                                <div className = "listadodeVentas letraEncabezado">Ver Información</div>
                                <div className = "listadodeVentas letraEncabezado">Eliminar</div>
                            
                                </div>

                        {ventas.map((venta) => {
                            return (

                            <section>


                                <div className= "tablaListaVentas">
                                    <div className = "listadodeVentas cuadroTabla">{venta.id_venta}</div>
                                    <div className = "listadodeVentas cuadroTabla">{venta.id_cliente}</div>
                                    <div className = "listadodeVentas cuadroTabla">{venta.fecha_venta}</div>
                                    <div className = "listadodeVentas cuadroTabla">{venta.estado_venta}</div>
                                    <div className = "listadodeVentas cuadroTabla">{venta.valor_total}</div>

                                    <Link to={{
                                        pathname: '/editarVenta',
                                        state: {id_venta: venta.id_venta,
                                            id_cliente: venta.id_cliente,
                                            nombre_producto: venta.nombre_producto,
                                            nombre_cliente: venta.nombre_cliente,
                                            vendedor: venta.vendedor,
                                            fecha_venta: venta.fecha_venta,
                                            estado_venta: venta.estado_venta,
                                            valor_venta: venta.valor_venta,
                                            cantidad:venta.cantidad,
                                            valor_total: venta.valor_total},
                                    }} img className ="icoTabla">
                                        
                                        <div className = "cuadroTabla botonModulos"><img className ="icoTabla" src= {iconoGranaje} alt="Editar"/>
                                    </div></Link>

                                    <Link  to={{
                                    pathname: '/verVenta',
                                    state: {id_venta: venta.id_venta,
                                        id_cliente: venta.id_cliente,
                                        nombre_producto: venta.nombre_producto,
                                        nombre_cliente: venta.nombre_cliente,
                                        vendedor: venta.vendedor,
                                        fecha_venta: venta.fecha_venta,
                                        estado_venta: venta.estado_venta,
                                        valor_venta: venta.valor_venta,
                                        cantidad:venta.cantidad,
                                        valor_total: venta.valor_total},
                                }} img className ="icoTabla"><div className = "cuadroTabla botonModulos"><i class="fas fa-eye"></i>
                                </div></Link>

                                    

                                <div className = "cuadroTabla botonModulos"><img className ="icoTabla" onClick={() => deleteVentas(venta.id_venta)} src= {iconoBasurero} alt="Eliminar"/></div>

                                    
                                </div>
                            </section>

                            );
                        })}
                        <div className = "botonAgregarUsuario botonModulos titulo centrar"> <span><Link to = "/agregarVenta" className ="link">Agregar Venta</Link></span></div>
                        </ul>
                        </main>
                        <Footer />

                </body>
            </PrivateRoute>
        </div>
    );
}
export default ListadoVentas;
