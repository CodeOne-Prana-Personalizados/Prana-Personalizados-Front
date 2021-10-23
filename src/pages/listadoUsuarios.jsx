import {Link} from 'react-router-dom';
import Footer from 'components/Footer';
/*Iconos de editar o eliminar*/
import iconoGranaje from "media/ruedaConfiguración.png";
import iconoBasurero from "media/basurero.png";
import React, {useState, useEffect} from "react";
import Usuarios from "../services/usuario";
import http from "../http-common";
import PrivateRoute from 'components/PrivateRoute';
import { useAuth0 } from "@auth0/auth0-react";
import useActiveRoute from 'hooks/useActiveRoute';
import HeaderP from 'components/HeaderP';

const ListadoUsuarios=()=>{


    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        retrieveUsuarios();
      }, []);

    const retrieveUsuarios = () => {
        Usuarios.getAll()
          .then(response => {
            console.log(response.data);
            setUsuarios(response.data.usuarios);
            
          })
          .catch(e => {
            console.log(e);
          });
      };

      const deleteUsuario = (id_usuario) => {
        Usuarios.deleteUsuario(id_usuario)
          alert('Usuario eliminado');
      };




    return(
        <div className="ListadodeUsuarios">
            <PrivateRoute>
            <body>
                <HeaderP nombreBuscador='Buscar Usuario' linkModulo= '/listadoUsuarios' nombreModulo = "Administración de Usuarios"/>
                    <main>
                    <h1 className = "tituloProductos">Usuarios</h1>
                    <ul>                               
                    <div className= "tablaUsuarios">
            
                        <div className = "cuadroTablaUsuarios letraEncabezado">ID</div>
                        <div className = "cuadroUsuarios letraEncabezado">Nombre</div>
                        <div className = "cuadroUsuarios letraEncabezado">Correo</div>
                        <div className = "cuadroTablaUsuarios letraEncabezado">Celular</div>
                        <div className = "cuadroTablaUsuarios letraEncabezado">Fecha ingreso</div>
                        <div className = "cuadroTablaUsuarios letraEncabezado">Estado</div>
                        <div className = "cuadroTablaUsuarios letraEncabezado">Rol</div>
                        <div className = "cuadroTablaUsuarios letraEncabezado">Editar</div>
                        <div className = "cuadroTablaUsuarios letraEncabezado">Eliminar</div>
                    </div>

                    {usuarios.map((usuario) => {
                        return (

                        <section>


                            <div className= "tablaUsuarios">
                                <div className = "cuadroTablaUsuarios">{usuario.id_usuario}</div>
                                <div className = "cuadroUsuarios">{usuario.nombre}</div>
                                <div className = "cuadroUsuarios">{usuario.correo}</div>
                                <div className = "cuadroTablaUsuarios">{usuario.celular}</div>
                                <div className = "cuadroTablaUsuarios">{usuario.fecha_ingreso}</div>
                                <div className = "cuadroTablaUsuarios">{usuario.estado}</div>
                                <div className = "cuadroTablaUsuarios">{usuario.rol}</div>

                                <Link to={{
                                    pathname: '/editarUsuario',
                                    state: {id_usuario:usuario.id_usuario,
                                        nombre:usuario.nombre, 
                                        correo:usuario.correo,
                                        celular:usuario.celular,
                                        fecha_ingreso: usuario.fecha_ingreso,
                                        estado: usuario.estado,
                                        rol:usuario.rol},
                                }} img className ="icoTabla"><div className = "cuadroTablaUsuarios botonModulos"><img className ="icoTabla" src= {iconoGranaje} alt="Editar"/>
                                </div></Link>
                                
                                <div className = "cuadroTablaUsuarios botonModulos"><img className ="icoTabla" onClick={() => deleteUsuario(usuario.id_usuario)} src= {iconoBasurero} alt="Eliminar"/></div>
                            
                            </div>
                        </section>

                        );
                    })}
                    <div className = "botonAgregarUsuario botonModulos titulo centrar" ><span><Link to='/agregarUsuario' className="link">Agregar usuario</Link></span></div>      
                    </ul>
                    </main>
                
                    <Footer />
                </body>
            </PrivateRoute>

        </div>
    );
}
export default ListadoUsuarios;
   
 