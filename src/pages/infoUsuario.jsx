import {Link} from 'react-router-dom';
import Footer from 'components/Footer';
import HeaderP from 'components/HeaderP';
import PrivateRoute from 'components/PrivateRoute';
import { useAuth0 } from "@auth0/auth0-react";

const InfoUsuario =() =>{


    return(
        <div className="infoPersona">
            <PrivateRoute>
                <body>
                    <HeaderP nombreBuscador='Buscar Usuario' linkModulo= '/listadoUsuarios' nombreModulo = "Administración de Usuarios"/>
                        <main className = "tamañoPaginaIndex">
                            <section>
                                <h1 className="centrar tituloUsuario">Juanita Gómez   ID: 123456789</h1>
                                <div className= "tablaPersona centrar">

                                    <div className = "tablaproductos letraEncabezado">Numero de celular</div>
                                    <div className = "tablaproductos letraEncabezado">Fecha de nacimiento</div>
                                    <div className = "tablaproductos letraEncabezado">Fecha de ingreso</div>
                                    <div className = "tablaproductos letraEncabezado">Estado</div>
                                    <div className = "tablaproductos letraEncabezado">Rol</div>

                                    <div className = "tablaproductos cuadroTablaInfoPersona " >--</div>
                                    <div className = "tablaproductos cuadroTablaInfoPersona " >--</div>
                                    <div className = "tablaproductos cuadroTablaInfoPersona " >--</div>
                                    <div className = "tablaproductos cuadroTablaInfoPersona " >--</div>
                                    <div className = "tablaproductos cuadroTablaInfoPersona " ></div>
                                </div>            
                            </section>
                            <div className ="centrar">
                                <section>
                                    <ul >
                                        <li>
                                            <h4 className = "botonInfoProductos botonModulos centrar">
                                                <span className = "letraBotonInfoProducto">Editar</span>
                                            </h4>
                                        </li>
                                    </ul>
                                </section>
                                <section>
                                    <ul>
                                        <li>
                                            <h4 className = "botonInfoProductos botonModulos centrar">
                                                <span >Eliminar</span>
                                            </h4>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                        </main>
                    <Footer />
                </body>
            </PrivateRoute>
        </div>
    );
}
export default InfoUsuario;



