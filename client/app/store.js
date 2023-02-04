import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import maintenanceRequestsReducer from '../features/maintenanceRequest/allMaintenanceRequestSlice';
import maintenanceRequestReducer from '../features/maintenanceRequest/singleMaintenanceRequestSlice';
import tenantsReducer from '../features/allTenants/allTenantsSlice';
import unitsReducer from '../features/units/unitsSlice';
import singleTenantSlice from '../components/SingleTenant/singleTenantSlice' 

import propertiesReducer from '../features/property/propertySlice';
import landlordReducer from '../features/profilePage/landlordProfileSlice';
const store = configureStore({
  reducer: { 
    auth: authReducer,
    // all maintenanceRequests
    maintenanceRequests: maintenanceRequestsReducer,
    // One maintenanceRequest
    maintenanceRequest: maintenanceRequestReducer,
    // all tenants
    tenants: tenantsReducer,
    tenant: singleTenantSlice,
    units: unitsReducer,
    // all properties
    property: propertiesReducer,
    landlord: landlordReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// const blah = configureStore({ 
//   reducers: {
//     // ... 
//     tenant: singleTenantSlice
//   } 
// }) 

export default store;
export * from '../features/auth/authSlice';
export * from '../features/afterSignup/AddAPropertySlice';
