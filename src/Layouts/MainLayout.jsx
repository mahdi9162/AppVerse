import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router';
import { Toaster } from 'sonner';
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop';

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
      <Toaster richColors position="top-right" />
    </>
  );
};

export default MainLayout;
