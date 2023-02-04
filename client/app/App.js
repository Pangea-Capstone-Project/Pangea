import React from "react";
import AppRoutes from "./AppRoutes";
import Footer from "../features/footer/Footer";
// import LandlordNavbar from "../features/navbar/LandlordNavbar";

const App = () => {
  return (
    <div>
      {/* <LandlordNavbar /> */}
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
