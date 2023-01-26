import React from 'react';

import LandlordNavbar from '../features/navbar/LandlordNavbar';
import AppRoutes from './AppRoutes';

const App = () => {
  return (
    <div>
      <LandlordNavbar />
      <AppRoutes />
    </div>
  );
};

export default App;
