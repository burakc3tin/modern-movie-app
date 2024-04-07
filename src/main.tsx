import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home.tsx';
import Detail from './pages/Detail/Detail.tsx';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { store  } from './redux/store.ts'
import { Provider } from 'react-redux'

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
  <Provider store={store }>
  <React.StrictMode>
           <RouterProvider router={router} />
  </React.StrictMode>
  </Provider>,
)
