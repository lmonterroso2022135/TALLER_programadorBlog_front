import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { Content } from './App.jsx'
import './index.css'
import { 
  createBrowserRouter,
  RouterProvider

 } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [{
      path: "",
      element: <Content/>
    }]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
