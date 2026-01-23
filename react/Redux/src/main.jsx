import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import App from './App.jsx'
import store from './app/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
   <Provider store={store}>
    <App />
  </Provider>,
)
