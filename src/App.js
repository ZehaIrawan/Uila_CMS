import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Upgrade from './components/auth/Upgrade';
import Homepage from './components/Homepage';
import ManageProducts from './components/ManageProducts';
import PrivateRoutes from './components/routing/PrivateRoutes';
import setAuthToken from './components/utils/setAuthToken';
import { loadUser } from './redux/actions/auth';
import store from './redux/store';

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/upgrade" component={Upgrade} />
            <PrivateRoutes exact path="/products" component={ManageProducts} />
          </Switch>
        </>
      </Router>
    </Provider>
  );
};

export default App;
