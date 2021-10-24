import Index from './pages';
import ListadoProductos from './pages/listadoProductos';
import {InfoProductos} from './pages/infoProductos';
import AgregarProducto from './pages/agregarProducto';
import EditarProducto from './pages/editarProducto';
import EditarUsuario from './pages/editarUsuario';
import ListadoUsuarios from './pages/listadoUsuarios';
import InfoUsuario from './pages/infoUsuario';
import AgregarUsuario from './pages/agregarUsuario';
import InfoVentas from './pages/infoVentas';
import AgregarVenta from './pages/agregarVentas';
import ListadoVentas from './pages/listadoVentas';
import ComprobaciónAgregar from './pages/comprobacionAgregar';
import ComprobanteEditar from './pages/comprobanteEditar';
import VerProducto from './pages/verProducto';
import VerUsuario from './pages/verUsuario';
import Login from './pages/login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/estilos.css';
import { Auth0Provider } from "@auth0/auth0-react";
function App() {
    return (
      <Auth0Provider
      domain="prana-personalizados.us.auth0.com"
      clientId="1U9JJrvhZv7Qf3lHrw5Fm5xUXlcJrDYg"
      redirectUri={window.location.origin}
      audience='api-autenticación-prana-personalizados'
      >
        <div className='App'>
          <Router>
              <Switch>
                <Route path='/listadoProductos'>
                  <ListadoProductos />
                </Route>
                <Route path='/infoProductos'>
                <InfoProductos/>
                </Route>
                <Route path='/agregarProducto'>
                  <AgregarProducto />
                </Route>
                <Route path='/editarProducto'>
                  <EditarProducto />
                </Route>
                <Route path='/verProducto'>
                  <VerProducto />
                </Route>
                <Route path='/verUsuario'>
                  <VerUsuario />
                </Route>
                <Route path='/listadoVentas'>
                  <ListadoVentas />
                </Route> 
                <Route path='/infoVentas'>
                  <InfoVentas />
                </Route> 
                <Route path='/agregarVenta'>
                  <AgregarVenta />
                </Route>
                <Route path='/listadoUsuarios'>
                  <ListadoUsuarios />
                </Route>
                <Route path='/infoUsuario'>
                  <InfoUsuario />
                </Route>
                <Route path='/agregarUsuario'>
                  <AgregarUsuario />
                </Route>
                <Route path='/editarUsuario'>
                  <EditarUsuario />
                </Route>
                <Route path='/comprobanteAgregar'>
                  <ComprobaciónAgregar />
                </Route>
                <Route path='/comprobanteEditar'>
                  <ComprobanteEditar />
                </Route>
                <Route path='/login'>
                  <Login />
                </Route>
                <Route path='/'>
                  <Index />
                </Route>
              </Switch>
          </Router>
        </div>
      </Auth0Provider>
      
    );
  }
  export default App;
//borrar//