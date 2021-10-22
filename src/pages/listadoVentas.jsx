import {Link} from 'react-router-dom';
import Footer from 'components/Footer';
/*Iconos de editar o eliminar*/
import iconoGranaje from "media/ruedaConfiguración.png";
import iconoBasurero from "media/basurero.png";
import PrivateRoute from 'components/PrivateRoute';
import HeaderP from 'components/HeaderP';
import Ventas from "../services/ventas";
import React, {useState, useEffect} from "react";

const ListadoVentas=() =>{

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

      const deleteVentas = (id_ventas) => {
        Ventas.deleteVentas(id_ventas)
          alert('Venta Eliminada');
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

                        {ventas.map((ventas) => {
                            return (

                            <section>


                                <div className= "tablaListaVentas">
                                    <div className = "cuadroTablaUsuarios">{ventas.id_ventas}</div>
                                    <div className = "cuadroUsuarios">{ventas.id_cliente}</div>
                                    <div className = "cuadroUsuarios">{ventas.fecha_venta}</div>
                                    <div className = "cuadroTablaUsuarios">{ventas.estado_venta}</div>
                                    <div className = "cuadroTablaUsuarios">{ventas.valor_venta}</div>

                                    <div className = "cuadroTabla botonModulos letraEncabezado"><Link to = "/infoVentas" className ="link">Ver Información</Link></div>

                                    <Link to={{
                                        pathname: '/editarVenta',
                                        state: {id_ventas:ventas.id_ventas,
                                            nombre:ventas.id_cliente, 
                                            correo:ventas.fecha_venta,
                                            estado_venta:ventas.estado_venta,
                                            valor_venta: ventas.valor_venta,},
                                    }} img className ="icoTabla">
                                        
                                        <div className = "cuadroTablaUsuarios botonModulos"><img className ="icoTabla" src= {iconoGranaje} alt="Editar"/>
                                    </div></Link>

                                    
                                    <div className = "cuadroTablaUsuarios botonModulos"><img className ="icoTabla" onClick={() => deleteVentas(ventas.id_ventas)} src= {iconoBasurero} alt="Eliminar"/></div>
                                
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
