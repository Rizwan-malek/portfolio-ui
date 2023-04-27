import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/style.css";
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}>
    <App />
</Provider>);