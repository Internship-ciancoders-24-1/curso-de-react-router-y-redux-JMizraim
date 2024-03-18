import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="app">
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
