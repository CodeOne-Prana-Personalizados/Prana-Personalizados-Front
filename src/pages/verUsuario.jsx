import {Link} from 'react-router-dom';
import Footer from 'components/Footer';
import React, {useState} from "react";
import Usuarios from "../services/usuario";
import http from "../http-common";
import { useLocation } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';
import HeaderP from 'components/HeaderP';

const VerUsuario =(props) =>{

    const location = useLocation()
    console.log(location)

    let i_id_usuario=location.state.id_usuario;
    let i_nombre=location.state.nombre;
    let i_correo=location.state.correo;
    let i_celular=location.state.celular;
    let i_fecha_nacimiento=location.state.fecha_nacimiento;
    let i_fecha_ingreso=location.state.fecha_ingreso;
    let i_estado=location.state.estado;
    let i_rol=location.state.rol;
    
    let editing = false;
  
  /*  if (props.location.state ) {
        editing = true;*/
   /*const [viejaInfo, setViejaInfo] = useState({
        i_id_producto : props.location.state.id_producto,
        i_valor_unitario : props.location.state.valor_unitario,
        i_estado : props.location.state.estado,
        i_descripcion : props.location.state.descripcion
    });
      /*}*/
    
      const [nuevaInfo, setNuevaInfo] = useState({
        id_usuario: i_id_usuario,
        nombre: i_nombre,
        correo: i_correo,
        celular: i_celular,
        fecha_nacimiento: i_fecha_nacimiento,
        fecha_ingreso: i_fecha_ingreso,
        estado: i_estado,
        rol: i_rol
      });
    const [submitted, setSubmitted] = useState(false);
  
    const handleInputChange = event => {
          const {name, value} = event.target;
          setNuevaInfo(prevInput => {
              return {
                  ...prevInput,
                  [name]: value
              }
          })
          console.log(event.target);
    };
  
    const saveUsuario = () => {
      var data = {
        id_usuario: nuevaInfo.id_usuario,
        nombre: nuevaInfo.nombre,
        correo: nuevaInfo.correo,
        celular: nuevaInfo.celular,
        fecha_ingreso: nuevaInfo.fecha_ingreso,
        estado: nuevaInfo.estado,
        rol: nuevaInfo.rol        
      };
  
     
        Usuarios.updateUsuario(data)
          .then(response => {
            setSubmitted(true);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    
    };
    
    return(
        <div className="EditarUsuario">
            <PrivateRoute>
                <body> 
                    <HeaderP nombreBuscador='Buscar Usuario' linkModulo= '/listadoUsuarios' nombreModulo = "Administración de Usuarios"/>
                        <main>
                            <h1 className = "tituloProductos">Información Usuario</h1>
                            <ul>
                                <form  className="tablaAgregarUsuarios" action="ejemplo.php" method="get" >

                                    <p className = "letraEncabezado " >ID: </p>
                                    <p className="inputUsuario cuadroParaUsuarios"><input type="text" onChange={handleInputChange} name="id_usuario" size="40" value={nuevaInfo.id_usuario} readOnly="readonly"/></p>

                                    <p className = "letraEncabezado " >Nombre: </p>
                                    <p className="inputUsuario cuadroParaUsuarios"><input type="text" onChange={handleInputChange} name="nombre" size="40" value={nuevaInfo.nombre} readOnly="readonly"/></p>

                                    <p className = "letraEncabezado " >Correo Gmail: </p>
                                    <p className="inputUsuario cuadroParaUsuarios"><input type="email" onChange={handleInputChange} name="correo" size="40" value={nuevaInfo.correo} readOnly="readonly"/></p>

                                    <p className = "letraEncabezado  " >Número de Celular:</p>
                                    <p className="inputUsuario cuadroParaUsuarios" ><input type="tel" onChange={handleInputChange} name="celular" value={nuevaInfo.celular} readOnly="readonly"/></p>
                            
                                    <p className = "letraEncabezado  " >Fecha de Ingreso:</p>
                                    <p className="inputUsuario cuadroParaUsuarios" > <input type="date" onChange={handleInputChange} name="fecha_ingreso" value={nuevaInfo.fecha_ingreso} readOnly="readonly"/></p>

                                    <p className = "letraEncabezado  " >Estado:</p>
                                    <p className="inputUsuario cuadroParaUsuarios" > <input type="text" onChange={handleInputChange} name="estado" value={nuevaInfo.estado} readOnly="readonly"/></p>

                                    <p className = "letraEncabezado  " >Rol:</p>
                                    <p className="inputUsuario cuadroParaUsuarios" > <input type="text" onChange={handleInputChange} name="rol" value={nuevaInfo.rol} readOnly="readonly"/></p>


                                </form>
                                <div className = "botonAgregarUsuario botonModulos titulo centrar"><Link to='/listadoUsuarios' className="link"> <span>Regresar</span></Link></div>
                              </ul>
                        </main>
                    <Footer />
                </body>
            </PrivateRoute>
        </div>
    );
}
export default VerUsuario;

