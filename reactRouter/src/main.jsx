import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import ContactUs from './Components/ContactUs/ContactUs.jsx'
import User from './Components/User/User.jsx'
import GitHub from './Components/GitHub/GitHub.jsx'
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element : <Layout />,
//     children : [
//       {
//       path : "",
//       element : <Home />
//     },
//     {
//       path:"about",
//       element:<About />
//     },
//     {
//       path:"ContactUs",
//       element:<ContactUs />
//     }
//   ]
//   }
// ])
// or use different methods
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} >
  <Route path="" element={<Home />} />
  <Route path="About" element={<About />} />
  <Route path="ContactUs" element={<ContactUs />} />
  <Route path="User/:id" element={<User />} />
  <Route path="GitHub" element={<GitHub />} />
  </Route>
))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
