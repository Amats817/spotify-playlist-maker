import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/Login/Login';
import Callback from './Callback';
import Error from './components/Error/Error'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/spotify-playlist-maker/",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/spotify-playlist-maker/callback", 
    element: <Callback />,
  },
  {
    path: "/spotify-playlist-maker/main", 
    element: <App />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


