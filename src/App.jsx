import Index from './pages';
import ListadoProductos from './pages/listadoProductos.jsx';
import InfoProductos from './pages/infoProductos.jsx';
import AgregarProducto from './pages/agregarProducto.jsx';
import EditarProducto from './pages/editarProducto.jsx';
import EditarUsuario from './pages/editarUsuario.jsx';
import ListadoUsuarios from './pages/listadoUsuarios.jsx';
import InfoUsuario from './pages/infoUsuario';
import AgregarUsuario from './pages/agregarUsuario.jsx';
import InfoVentas from './pages/infoVentas.jsx';
import AgregarVenta from './pages/agregarVentas.jsx';
import ListadoVentas from './pages/listadoVentas.jsx';
import ComprobaciónAgregar from './pages/comprobaciónAgregar.jsx';
import ComprobanteEditar from './pages/comprobanteEditar.jsx';
import VerProducto from './pages/verProducto.jsx';
import VerUsuario from './pages/verUsuario.jsx';
import Login from './pages/login.jsx';
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
                  <InfoProductos />
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