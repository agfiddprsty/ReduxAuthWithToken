import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import './index.css';
import ListChara from './containers/CharaContainers';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import Login from './login';
import { PersistGate } from 'redux-persist/integration/react';
import * as serviceWorker from './serviceWorker';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';

ReactDOM.render(
<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <Router>
          <div>
              <Route exact path="/" component={ListChara} />
              <Route path="/login" component={Login}/>
          </div>
    </Router>
  </PersistGate>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
