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

            <Route path="/place/:id">
              <PlaceOrder />
            </Route>

            <Route path="/orders">
              <Orders />
            </Route>

            <Route path="/manage">
              <Manage />
            </Route>

            <Route path="/add">
              <Add />
            </Route>

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
