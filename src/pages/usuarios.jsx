import PrivateComponent from 'components/PrivateComponent';
import React, { useEffect, useState } from 'react';

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
      obtenerUsuarios(
        (response) => {
          setUsuarios(response.data);
        },
        () => {}
      );
    }, []);
    return (
      <div>
        <PrivateComponent roleList={['admin', 'vendedor']}>
          <button>Hola boton con roles</button>
        </PrivateComponent>
        <table className='tabla'>
          <tbody>
            {usuarios.map((el) => {
              return (
                <tr>
                  <td>{el.name}</td>
                  <td>{el.email}</td>
                  <td>
                    <RolSelector el={el} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };
  
  const RolSelector = ({ el }) => {
    const [rol, setRol] = useState(el.rol);
      
    return (
      <select value={rol} onChange={(e) => setRol(e.target.value)}>
        <option value='admin'>Admin</option>
        <option value='vendedor'>Vendedor</option>
        <option value='invitado'>Invitado</option>
      </select>
    );
  
  export default Usuarios;