import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;
