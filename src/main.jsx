import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppProvider } from "./context/context.jsx";
const App = React.lazy(()=> import("./App.jsx"));
const Home = React.lazy(()=> import("./Pages/Home.jsx"));
const About = React.lazy(()=> import("./Pages/About.jsx"));
const Packages = React.lazy(()=> import("./Pages/Packages.jsx"));
const Activities = React.lazy(()=> import("./Pages/Activities.jsx"));
const Gallery = React.lazy(()=> import("./Pages/Gallery.jsx"));
const Contact = React.lazy(()=> import("./Pages/Contact.jsx"));
const BlogDetails = React.lazy(()=> import("./Pages/BlogDetails.jsx"));


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/packages",
        element: <Packages />,
      },
      
      {
        path:"/activity",
        element:<Activities/>
      },

      
      {
        path:"/gallery",
        element:<Gallery/>
      },

      {
        path:"/contact",
        element:<Contact/>
      },

      {
        path:"/blog/:id",
        element:<BlogDetails/>
      }

      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AppProvider>
);
