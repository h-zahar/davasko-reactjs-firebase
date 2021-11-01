import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Login from './pages/Login/Login';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Orders from './pages/Orders/Orders/Orders';
import Manage from './pages/Manage/Manage/Manage';
import Add from './pages/Add/Add';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import AuthProvider from './contexts/AuthProvider';
import initializeAuthentication from './firebase/firebase.init';

initializeAuthentication();

function App() {

  return (
    <>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <PrivateRoute path="/place/:id">
              <PlaceOrder />
            </PrivateRoute>

            <PrivateRoute path="/orders">
              <Orders />
            </PrivateRoute>
            
            <PrivateRoute path="/manage">
              <Manage />
            </PrivateRoute>

            <PrivateRoute path="/add">
              <Add />
            </PrivateRoute>

            <Route path="/login">
              <Login />
            </Route>

            <Route>
              <NotFound path="*" />
            </Route>

          </Switch>
            <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
