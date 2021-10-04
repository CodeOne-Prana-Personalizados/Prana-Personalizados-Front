/*Se importa logo */
import logoPrana from "media/logoNavbar.png";
import logoCodeOne from "media/logoCodeOne.png";
/*Se importa iconos necesarios para la página*/
import iconoUsuarioVerde from "media/iconoUsuario.png";
import iconoBuscar from "media/iconoBusqueda.ico";
import iconoUsuarioBlanco from "media/iconoUsuario2.png";
import iconoReciboVenta from "media/Reciboventa.png";

function infoPersona() {
    return(
        <div className="infoPersona">
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
                                <img className="boton logo" src="./media/logoNavbar.png" alt= "imagen" /> 
                            </div>
                        </li>
            
                        <li>
                            <div className="buscar">
                                <input placeholder ="Buscar Usuarios"/>
                                <img className="iconoBusqueda" src="./media/iconoBusqueda.ico" alt="search" />
                            </div>
                            </li>
                        <li className ="boton tituloSeccionPagina">Gestión de usuarios</li>
                        <li>
                            <div className = "botonUsuario">
                                <span className="nombreUsuario">Ingresar/Registrar</span>
                                <img className ="iconoUsuario" src= "media/iconoUsuario.png" alt="iconoUsuario"/>
                            </div>  
                        </li>
                    </ul>
                </header>

                <main>
                    <section>
                        <h1 className="centrar tituloProductos">Juanita Gómez   ID: 123456789</h1>
                        <div className= "tablaPersona centrar">
                            <div className = "tablaproductos letraEncabezado">Numero de celular</div>
                            <div className = "tablaproductos letraEncabezado">Fecha de nacimiento</div>
                            <div className = "tablaproductos letraEncabezado">Fecha de ingreso</div>
                            <div className = "tablaproductos letraEncabezado">Estado</div>
                            <div className = "tablaproductos letraEncabezado">Rol</div>

                            <div className = "tablaproductos cuadroTablaInfoPersona " ></div>
                            <div className = "tablaproductos cuadroTablaInfoPersona " ></div>
                            <div className = "tablaproductos cuadroTablaInfoPersona " ></div>
                            <div className = "tablaproductos cuadroTablaInfoPersona " ></div>
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
                <footer>
                    <img className ="logoCodeOne" src="./media/logoCodeOne.png" alt ="logoCodeOne"/>
                </footer>
            </body>
        </div>
    );
}
export default infoPersona;



