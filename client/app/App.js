import React from 'react';

import LandlordNavbar from '../features/navbar/LandlordNavbar';
// import TenantNavbar from '../features/navbar/Tenantnavbar';
import AppRoutes from './AppRoutes';
import Footer from '../features/footer/Footer';

const App = () => {
  return (
    <div>
      <LandlordNavbar />
      <AppRoutes />
      <Footer />
      {/* dont mind me */}
    </div>
  );
};

export default App;
