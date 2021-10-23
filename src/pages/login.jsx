import {Link} from 'react-router-dom';
import Footer from 'components/Footer';
/*Se importa logo */
import logoPrana from "media/logoNavbar.png";
import logoCodeOne from "media/logoCodeOne.png";
/*Se importa iconos necesarios para la página*/
import logogmail from 'media/gmail.png';
import GoogleLogin from 'react-google-login';

const Login = () => {

    
    const respuestaGoogle=(respuesta)=>{
        console.log(respuesta);
        console.log(respuesta.profileObj);

    }
    
    return(
    
        <div className="login">
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
                </header>

                <main>
                    <section>
                        <ul className="tablaLogin">
                            
                                <li>
                                    <Link to = "/" className ="link">
                                        <h1 className = "tituloLogin"><img className="boton logo" src={logoPrana} alt= "imagen" /></h1>
                                    </Link>
                                </li>
                            
                            
                            <li className = "tablaFormularioLogin">
                                <form action="ejemplo.php" method="get">
                                    <p className="tituloFormulario" >Correo Gmail</p>
                                    <p className="cuadroLogin inputLogin" ><input  type="email" name="Correo" placeholder="ejemplo@gmail.com" size="40" /></p>
                                    
                                    <p className="tituloFormulario" >Contraseña</p>
                                    <p className="cuadroLogin inputLogin"> <input type="password" name="Contraseña" /></p>
                                    <p className="tituloOlvideContra cursorMano centrar">Olvide la contraseña</p>
                                    <p> <button type="button" className = "botonEnviarLogin botonModulos titulo centrar"> <span>Enviar</span></button></p>
                                    <p> <button type="button" className = "botonEnviarLogin botonModulos titulo centrar"> <span>Registrase</span></button></p>
                                    <p ><GoogleLogin
        clientId="1017717902955-2c60rivbr7gncp8lfpl6j9sgmdrq6ccu.apps.googleusercontent.com"
        render={renderProps => (
            <button type="button" className = "botonEnviarLogin botonModulos titulo centrar" onClick={renderProps.onClick} disabled={renderProps.disabled}><span>Iniciar con Gmail</span></button>
          )}
        onSuccess={respuestaGoogle}
        onFailure={respuestaGoogle}
        cookiePolicy={'single_host_origin'}
      /></p>
                                </form>
                            </li>

                        </ul>
                    </section>
                    
                </main>

                <Footer />
            </body>
        </div>
    );
}
export default Login;

    