import {Link} from 'react-router-dom';
import Footer from 'components/Footer';
import HeaderP from 'components/HeaderP';
import PrivateRoute from 'components/PrivateRoute';
import { useAuth0 } from "@auth0/auth0-react";

const ComprobaciónAgregar = () =>{
    const { logout } = useAuth0();
    const cerrarSesion =()=> {
        logout({returnTo: 'http://localhost:3000/listadoProductos'})
    localStorage.setItem('token', null)
    }


    return(
        <div className="comprobaciónAgregar">
            <PrivateRoute>
                <body>
                    <HeaderP nombreBuscador='Buscar' />   
                        <main className = "tamañoPaginaIndex">
                            <section>
                                <ul className="comprovante">
                                    <span>¡La información ha sido agregada correctamente!</span>
                                </ul>
                                <div className = "botonAgregarUsuario botonModulos titulo centrar"> <Link to='/' className="link"><span>Regresar</span></Link></div>
                            </section>
                        </main>
                    <Footer />

                </body>
            </PrivateRoute>

        </div>
    );
}
export default ComprobaciónAgregar;


