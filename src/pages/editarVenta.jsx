import {Link} from 'react-router-dom';
import Footer from 'components/Footer';
import React, {useState} from "react";
import Ventass from "../services/venta";
import http from "../http-common";
import { useLocation } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';
import HeaderP from 'components/HeaderP';

const EditarVentas =(props) =>{

    const location = useLocation()
    console.log(location)

    let i_id_venta=location.state.id_venta;
    let i_cliente=location.state.id_cliente;
    let i_vendedpr=location.state.vendedor;
    let i_fecha_venta=location.state.fecha_venta;
    let i_fecha_nacimiento=location.state.fecha_nacimiento;
    let i_estado_venta=location.state.estado_venta;
    let i_valor_venta=location.state.valor_venta;
    
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
        id_ventas: i_id_ventas,
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
  
    const saveVentas = () => {
      var data = {
        id_ventas: nuevaInfo.id_ventas,
        nombre: nuevaInfo.nombre,
        correo: nuevaInfo.correo,
        celular: nuevaInfo.celular,
        fecha_ingreso: nuevaInfo.fecha_ingreso,
        estado: nuevaInfo.estado,
        rol: nuevaInfo.rol        
      };
  
     
        Ventass.updateVentas(data)
          .then(response => {
            setSubmitted(true);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    
    };
    
    return(
        <div className="EditarVentas">
            <PrivateRoute>
                <body> 
                    <HeaderP nombreBuscador='Buscar Ventas' linkModulo= '/listadoVentass' nombreModulo = "Administración de Ventass"/>
                        <main>
                            <h1 className = "tituloProductos">Editar Ventas</h1>
                            <ul>
                                <form  className="tablaAgregarVentass" action="ejemplo.php" method="get" >

                                    <p className = "letraEncabezado " >ID: </p>
                                    <p className="inputVentas cuadroParaVentass"><input type="text" onChange={handleInputChange} name="id_ventas" size="40" value={nuevaInfo.id_ventas} /></p>

                                    <p className = "letraEncabezado " >Nombre: </p>
                                    <p className="inputVentas cuadroParaVentass"><input type="text" onChange={handleInputChange} name="nombre" size="40" value={nuevaInfo.nombre} /></p>

                                    <p className = "letraEncabezado " >Correo Gmail: </p>
                                    <p className="inputVentas cuadroParaVentass"><input type="email" onChange={handleInputChange} name="correo" size="40" value={nuevaInfo.correo} /></p>

                                    <p className = "letraEncabezado  " >Número de Celular:</p>
                                    <p className="inputVentas cuadroParaVentass" ><input type="tel" onChange={handleInputChange} name="celular" value={nuevaInfo.celular}/></p>
                            
                                    <p className = "letraEncabezado  " >Fecha de Ingreso:</p>
                                    <p className="inputVentas cuadroParaVentass" > <input type="date" onChange={handleInputChange} name="fecha_ingreso" value={nuevaInfo.fecha_ingreso}/></p>

                                    <p className = "letraEncabezado  " >Estado:</p>
                                    <p className="inputVentas cuadroParaVentass" > <input type="text" onChange={handleInputChange} name="estado" value={nuevaInfo.estado}/></p>

                                    <p className = "letraEncabezado  " >Rol:</p>
                                    <p className="inputVentas cuadroParaVentass" > <input type="text" onChange={handleInputChange} name="rol" value={nuevaInfo.rol} /></p>


                                </form>
                                <div onClick={saveVentas} className = "botonAgregarVentas botonModulos titulo centrar"><Link to='/listadoVentass' className="link"> <span>Guardar Cambios</span></Link></div>
                              </ul>
                        </main>
                    <Footer />
                </body>
            </PrivateRoute>
        </div>
    );
}
export default EditarVentas;

