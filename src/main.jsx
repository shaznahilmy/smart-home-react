import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
//import RootLayout from "./pages/layout";
//import HomePage from "./pages/home/page";
import Home from "./pages/home";
import Settings from "./pages/settings.jsx";
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"; // importing some packages from react-router-dom

//every element in this array, will refer to a particular url and a name
const router = createBrowserRouter([
  {
    element: <App/>,
    //path:"/",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <RouterProvider router={router}/> {/*code for router*/ }
    
  </React.StrictMode>,
)
