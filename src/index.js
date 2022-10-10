import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";

import App from './App';
import "./assets/main.js";
// Style
import "./assets/css/style.css";
import 'react-toastify/dist/ReactToastify.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>
);