import {Link} from 'react-router-dom';
import Footer from 'components/Footer';
/*Se importa iconos necesarios para la página*/
import React, {useState} from "react";
import {useEffect} from "react";
import Usuarios from "../services/usuario";
import http from "../http-common";
import PrivateRoute from 'components/PrivateRoute';
import HeaderP from 'components/HeaderP';


const AgregarUsuario = () => {

    
    const [input, setInput] =useState({
        id_usuario: 0,
        nombre: '',
        correo: "",
        celular: "",
        fecha_ingreso: '',
        estado:"",
        rol: "",
    }) 

    function handleChange(event){
        const {name, value} = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
        console.log(event.target);
    }

    function handleClic(event){
        event.preventDefault();
        http.post("/usuarios", input);
        console.log(input);
    }

    return(
            <div className="AgregarUsuario">
                <PrivateRoute>
                <body> 
                <HeaderP nombreBuscador='Buscar Usuario' linkModulo= '/listadoUsuarios' nombreModulo = "Administración de Usuarios"/>
                    <main>
                        <h1 className = "tituloProductos">Agregar Usuario</h1>
                        <ul>
                            <form  className="tablaAgregarUsuarios" action="ejemplo.php" method="get" >

                            <p className = "letraEncabezado " >ID: </p>
                                <p className="inputUsuario cuadroParaUsuarios"><input  onChange={handleChange} name="id_usuario" size="40" value={input.id_usuario} /></p>

                                <p className = "letraEncabezado " >Nombre: </p>
                                <p className="inputUsuario cuadroParaUsuarios"><input type="text" onChange={handleChange}  autocomplete="off" name="nombre" size="40" value={input.nombre} /></p>

                                <p className = "letraEncabezado " >Correo Gmail: </p>
                                <p className="inputUsuario cuadroParaUsuarios"><input type="email" onChange={handleChange} name="correo" size="40" value={input.correo} /></p>

                                <p className = "letraEncabezado  " >Número de Celular:</p>
                                <p className="inputUsuario cuadroParaUsuarios" ><input type="tel" onChange={handleChange} name="celular" value={input.celular}/></p>
                        
                                <p className = "letraEncabezado  " >Fecha de Ingreso:</p>
                                <p className="inputUsuario cuadroParaUsuarios" > <input type="date" onChange={handleChange} name="fecha_ingreso" value={input.fecha_ingreso}/></p>

                                <p className = "letraEncabezado  " >Estado:</p>
                                <p className="inputUsuario cuadroParaUsuarios" > <input type="text" onChange={handleChange} name="estado" value={input.estado}/></p>

                                <p className = "letraEncabezado  " >Rol:</p>
                                <p className="inputUsuario cuadroParaUsuarios" > <input type="text" onChange={handleChange} name="rol" value={input.rol} /></p>

                        
                            </form>
                            <div onClick={handleClic} className = "botonAgregarUsuario botonModulos titulo centrar"><Link to='/comprobanteAgregar' className="link"> <span>Agregar Usuario</span></Link></div>
                        </ul>
                    </main>
                    <Footer />
                </body>
                </PrivateRoute>
            </div>
        
    );
    
};
export default AgregarUsuario;