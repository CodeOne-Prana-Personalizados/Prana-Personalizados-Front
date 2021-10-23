import {Link} from 'react-router-dom';
import Footer from 'components/Footer';
/*Iconos de editar o eliminar*/
import iconoGranaje from "media/ruedaConfiguración.png";
import iconoBasurero from "media/basurero.png";
import PrivateRoute from 'components/PrivateRoute';
import HeaderP from 'components/HeaderP';
import Ventas from "../services/venta.js";
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

      const deleteVenta = (id_venta) => {
        Ventas.deleteVenta(id_venta)
          alert('venta eliminada');
      };


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
                                <div className = "listadodeVentas letraEncabezado">Ver Información</div>
                                <div className = "listadodeVentas letraEncabezado">Editar</div>
                                <div className = "listadodeVentas letraEncabezado">Eliminar</div>
                            
                                </div>

                        {ventas.map((venta) => {
                            return (

                            <section>


                                <div className= "tablaListaVentas">
                                    <div className = "cuadroTablaUsuarios">{venta.id_venta}</div>
                                    <div className = "cuadroUsuarios">{venta.id_cliente}</div>
                                    <div className = "cuadroUsuarios">{venta.fecha_venta}</div>
                                    <div className = "cuadroTablaUsuarios">{venta.estado_venta}</div>
                                    <div className = "cuadroTablaUsuarios">{venta.valor_venta}</div>

                                    <div className = "cuadroTabla botonModulos letraEncabezado"><Link to = "/infoVentas" className ="link">Ver Información</Link></div>

                                    <Link to={{
                                        pathname: '/editarVenta',
                                        state: {id_venta:venta.id_venta,
                                            id_clienre:venta.id_cliente, 
                                            fecha_venta:venta.fecha_venta,
                                            estado_venta:venta.estado_venta,
                                            valor_venta: venta.valor_venta,},
                                    }} img className ="icoTabla">
                                        
                                        <div className = "cuadroTablaUsuarios botonModulos"><img className ="icoTabla" src= {iconoGranaje} alt="Editar"/>
                                    </div></Link>

                                    
                                    <div className = "cuadroTablaUsuarios botonModulos"><img className ="icoTabla" onClick={() => deleteVenta(venta.id_venta)} src= {iconoBasurero} alt="Eliminar"/></div>
                                
                                </div>
                            </section>

                            );
                        })}
                        <div className = "botonAgregarUsuario botonModulos titulo centrar"> 
                                        
                                        <span><Link to = "/agregarVenta" className ="link">Agregar Venta</Link></span>
                                    
                                </div>
                        </ul>
                        </main>
                        <Footer />

                </body>
            </PrivateRoute>
        </div>
    );
}
export default ListadoVentas;
