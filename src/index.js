import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Datos from './componentes/Datos';
import * as serviceWorker from './serviceWorker';
// import '/bootstrap/dist/css/bootstrap.min.css';
// import '/bootstrap/dist/bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';

ReactDOM.render(<Datos />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
