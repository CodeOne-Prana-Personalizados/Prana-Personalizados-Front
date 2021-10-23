import {Link} from 'react-router-dom';
import Footer from 'components/Footer';
import PrivateRoute from 'components/PrivateRoute';
import HeaderP from 'components/HeaderP';

const ComprobanteEditar =() =>{


    return(
        <div className="comprobanteEditar">
            <PrivateRoute>
                <body>
                    <HeaderP nombreBuscador='Buscar'/>
                        <main className = "tamañoPaginaIndex">
                            <section>
                                <ul className="comprovante">
                                    <span>¡La información ha sido actualizada correctamente!</span>
                                </ul>
                                <div className = "botonAgregarUsuario botonModulos titulo centrar" > <Link to='/' className="link"><span>Regresar</span></Link></div>
                            </section>
                        </main>
                    <Footer />
                </body>
            </PrivateRoute>

        </div>
    );
}
export default ComprobanteEditar;


