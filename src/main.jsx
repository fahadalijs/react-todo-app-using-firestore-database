import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/layout.jsx';
import Login from './screens/login/login.jsx';
import Registered from './screens/registered/registered.jsx';




const router = createBrowserRouter([
  { 
    
   path: "/",
   element: <Layout/>,
   children:[

      {
        path: "login",
        element: <Login/>

      },
      {
        path: "registered",
        element: <Registered/>

      }
    
  ]


  }
])



createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} > 
  <App />
  </RouterProvider>
)
