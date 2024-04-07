import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home.tsx';
import Detail from './pages/Detail/Detail.tsx';
import { createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/detail",
    element: <Detail/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
           <RouterProvider router={router} />
  </React.StrictMode>,
)
