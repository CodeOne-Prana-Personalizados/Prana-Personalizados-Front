import {Link} from 'react-router-dom';
import Footer from 'components/Footer';
import iconoGranaje from "media/ruedaConfiguración.png";
import iconoBasurero from "media/basurero.png";
import React, {useState, useEffect} from "react";
import Productos from "../services/codeone";
import http from "../http-common";
import PrivateRoute from 'components/PrivateRoute';
import HeaderP from 'components/HeaderP';


const ListadoProductos =() => {


    const [productos, setProductos] = useState([]);

    useEffect(() => {
        retrieveProductos();
      }, []);

    const retrieveProductos = () => {
        Productos.getAll()
          .then(response => {
            console.log(response.data);
            setProductos(response.data.productos);
            
          })
          .catch(e => {
            console.log(e);
          });
      };

      const deleteProducto = (id_producto) => {
        Productos.deleteProducto(id_producto)
          alert('Producto eliminado');
      };



    return(
        <div classname="listadoProductos">
            <PrivateRoute>
            
            <body>
                <HeaderP nombreBuscador='Buscar Producto'  linkModulo = '/listadoProductos' nombreModulo = "Administración de Productos"/>
                <main>
                <h1 className = "tituloProductos">Listado de productos</h1>
                <span className = "botonAgregarProductos botonModulos titulo centrar"><Link to='/agregarProducto' className="link">Agregar productos</Link></span>

                    <ul>                               
                   
                    <div className= "tablaProductos">
            
                        <div className = "cuadroTabla letraEncabezado">ID</div>
                        <div className = "cuadroTabla letraEncabezado">Nombre</div>
                        <div className = "cuadroTabla letraEncabezado">Descripcion</div>
                        <div className = "cuadroTabla letraEncabezado">valor</div>
                        <div className = "cuadroTabla letraEncabezado">Estado</div>
                        <div className = "cuadroTabla letraEncabezado">Editar</div>
                        <div className = "cuadroTabla letraEncabezado">Eliminar</div>
                    </div>

                    {productos.map((producto) => {
                        return (

                        <section>


                            <div className= "tablaProductos">
                                <div className = "cuadroTabla">{producto.id_producto}</div>
                                <div className = "cuadroTabla">{producto.nombre_producto}</div>
                                <div className = "cuadroTabla">{producto.descripcion}</div>
                                <div className = "cuadroTabla">{producto.valor_unitario}</div>
                                <div className = "cuadroTabla">{producto.estado}</div>
                            

                                <Link to={{
                                    pathname: '/editarProducto',
                                    state: {id_producto:producto.id_producto, descripcion:producto.descripcion,
                                    valor_unitario:producto.valor_unitario, estado: producto.estado},
                                }} img className ="icoTabla"><div className = "cuadroTabla botonModulos"><img className ="icoTabla" src= {iconoGranaje} alt="Editar"/>
                                </div></Link>
                                
                                <div className = "cuadroTabla botonModulos"><img className ="icoTabla" onClick={() => deleteProducto(producto.id_producto)} src= {iconoBasurero} alt="Eliminar"/></div>
                            
                            </div>
                        </section>

                        );
                    })}
                            
                    </ul>
                </main>
                    
                <Footer />
            </body>
            </PrivateRoute>
        </div>
        
    );
}
export default ListadoProductos;