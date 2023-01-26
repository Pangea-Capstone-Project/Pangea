import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import maintenanceRequestsReducer from '../features/maintenanceRequest/maintenanceRequestSlice'

const store = configureStore({
  reducer: { 
    auth: authReducer,
    maintenanceRequests: maintenanceRequestsReducer,
  
  
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
