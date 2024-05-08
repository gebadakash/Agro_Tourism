import './App.css'
import {Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { Suspense } from 'react';
const FooterSection = React.lazy(()=> import("./Components/Footer/FooterSection"));
const Header = React.lazy(()=> import("./Components/NavBar/Header/Header"));
const TopBar = React.lazy(()=> import("./Components/NavBar/TopBar/TopBar"));
const FixedButtons = React.lazy(()=> import("./Components/FixedButtons/FixedButtons"));
const GoToTop = React.lazy(()=> import("./Components/FixedButtons/GoToTop"));

function App() {
  
  return (
    <>
    <Suspense>
      <TopBar/>
      <Header/>
      <ToastContainer position="top-center" />
      <Outlet/>
      <FixedButtons />
      <GoToTop />
      <FooterSection/>
    </Suspense>
    </>
  )
}

export default App
