import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/Login/Login';
import Callback from './Callback';
import Error from './components/Error/Error'
import { createHashRouter, RouterProvider } from "react-router-dom";


const router = createHashRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/callback",
    element: <Callback />,
  },
  {
    path: "/main",
    element: <App />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


