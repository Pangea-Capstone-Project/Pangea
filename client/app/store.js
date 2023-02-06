import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import maintenanceRequestsReducer from '../features/maintenanceRequest/allMaintenanceRequestSlice';
import maintenanceRequestReducer from '../features/maintenanceRequest/singleMaintenanceRequestSlice';
import tenantsReducer from '../features/allTenants/allTenantsSlice';
import unitsReducer from '../features/units/unitsSlice';

import propertiesReducer from '../features/property/propertySlice'

import rentsReducer from "../features/rent/rentSlice";
import cartSlice from "../features/cart/cartSlice";
import singleRentSlice from "../features/rent/singleRentSlice";
// import usersReducer from "../features/users/usersSlice";
import orderSlice from "../features/orders/orderSlice";
import cartRentDetailsSlice from "../features/cart/cartRentDetailsSlice";

import landlordReducer from '../features/profilePage/landlordProfileSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    // all maintenanceRequests
    maintenanceRequests: maintenanceRequestsReducer,
    // all tenants
    tenants: tenantsReducer,
    units: unitsReducer,
    // all properties
    property: propertiesReducer,

    rents: rentsReducer,
    singleRent: singleRentSlice,
    cart: cartSlice,
    // users: usersReducer,
    order: orderSlice,
    orderDetails: cartRentDetailsSlice,

    landlord: landlordReducer,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
export * from '../features/afterSignup/AddAPropertySlice';
