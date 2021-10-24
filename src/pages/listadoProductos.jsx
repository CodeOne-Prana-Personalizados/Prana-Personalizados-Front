import {Link} from 'react-router-dom';
import Footer from 'components/Footer';
/*Se importa logo */
import logoPrana from "media/logoNavbar.png";
import logoCodeOne from "media/logoCodeOne.png";
/*Se importa iconos necesarios para la página*/
import iconoUsuarioVerde from "media/iconoUsuario.png";
import iconoBuscar from "media/iconoBusqueda.ico";
/*Iconos de editar o eliminar*/
import iconoGranaje from "media/ruedaConfiguración.png";
import iconoBasurero from "media/basurero.png";
import React, {useState, useEffect} from "react";
import Productos from "../services/codeone";
import http from "../http-common";
import PrivateRoute from 'components/PrivateRoute';
import { useAuth0 } from "@auth0/auth0-react";



const ListadoProductos =({ListadoProductos, setEjecutarConsulta}) => {
    const { logout } = useAuth0();
    const [busqueda, setBusqueda] = useState("");
    const[ProductosFiltrados,setProductosFiltrados] = useState(ListadoProductos);

    useEffect(() => {
        console.log("busqueda",busqueda);
        console.log("lista original", ListadoProductos);
        setProductosFiltrados(
        ListadoProductos.filter ((elemento) => {
             console.log('elemento',elemento);
            return JSON.stringify(elemento) .toLowerCase().includes(busqueda,toLowerCase());
        })
        ),
    }, [busqueda, ListadoProductos]);

    useEffect(() => {
    },[ListadoProductos]);

    

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
                <header> 
                    <ul className="barraRedes">
                        <li><i className="fas fa-palette"></i></li>
                        <div className= "icoRedes">
                            <li><i className=" fab fa-facebook"></i></li>
                            <li><i className=" fab fa-instagram"></i></li>
                            <li><i className="fab fa-whatsapp"></i></li>
                        </div>
                    </ul>
                    <ul className="navbar">
                        <li>
                            <div> 
                                <Link to = "/" className ="link"><img className="boton logo" src={logoPrana} alt= "imagen" /></Link>
                            </div>
                        </li>

                        <li>        
                            
                            <div className="buscar">
                             
                                <input
                                value={busqueda}
                                onChange={e=>setBusqueda(e.target.value)}
                                 placeholder ="Buscar Productos"
                                 />
                                   
                                    
                                    
                                <img className="iconoBusqueda" src={iconoBuscar} alt="search" />
                            </div>
                        </li>
                        <li className ="boton tituloSeccionPagina"><Link to = "/listadoProductos" className ="link">Administración de Productos</Link></li>
                        <li>
                            <div className = "botonUsuario">
                                <span onClick={() => logout({ returnTo: window.location.origin })} className="nombreUsuario">Cerrar Sesión</span>
                                <img className ="iconoUsuario" src= {iconoUsuarioVerde} alt="iconoUsuario"/>
                            </div>
                        </li>
                    </ul>
                </header>  
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