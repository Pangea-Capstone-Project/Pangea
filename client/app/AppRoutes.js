import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AllTenants from "../features/allTenants/AllTenants";
import AuthForm from "../features/auth/AuthForm";
import MaintenanceRequest from "../features/maintenanceRequest/MaintenanceRequest";
import SingleMaintenanceRequest from "../features/maintenanceRequest/SingleMaintenanceRequest";
import TenantHome from "../features/tenant/home/TenantHome.jsx";
import MaintenanceReq from "../features/tenant/maintenanceReq/MaintenanceReq.jsx";
import Messages from "../features/tenant/messages/Messages.jsx";
import MakeAPayment from "../features/tenant/payments/MakeAPayment.jsx";
import PastPayments from "../features/tenant/payments/PastPayments.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import Home from "../features/home/Home.jsx";
import AuthFormSignup from "../features/auth/AuthFormSignup";
import AfterSignUpLandlord from "../features/afterSignup/AfterSignUpLandlord";
import AfterSignUpTenant from "../features/afterSignup/AfterSignUpTenant";
import AddAProperty from "../features/afterSignup/AddAProperty";
import { me } from "./store";
import AddAUnit from "../features/afterSignup/AddAUnit";
import AllRents from "../features/rent/Rents";
import { Rent } from "../features/rent/Rent";
import Checkout from "../features/checkout/Checkout";
import { CartView } from "../features/cart/CartView";
import { OrderHistory } from "../features/orders/OrderHistory";
import AddRent from "../features/rent/AddRent";

import { selectMe } from "../features/auth/authSlice";
import LandlordProfile from "../features/profilePage/LandlordProfile";
import AddTenantToUnit from "../features/afterSignup/AddTenantToUnit";
import CreateMaintenanceRequest from "../features/createMaintenanceRequestTenant/CreateMaintenanceRequest";

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const userLoggedIn = useSelector(selectMe);

  const dispatch = useDispatch();

  // console.log(`userLoggedIn`,userLoggedIn)
  // console.log(`isLoggedIn`, isLoggedIn)
  // console.log(`localStorage.getItem('token')`,localStorage.getItem('token'))

  useEffect(() => {
    dispatch(me());
  }, []);


  return (
    <div>
      {isLoggedIn ? (
        ////////// IF Logged in as a Tenant Show this Routes /////////////
        userLoggedIn.role === "tenant" ? (
          <Routes>
            <Route path="/tenanthome" element={<TenantHome />} />
            <Route path="/makeapayment" element={<MakeAPayment />} />
            <Route path="/pastpayments" element={<PastPayments />} />
            <Route path="/maintenancereq" element={<MaintenanceReq />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/signup-tenant" element={<AfterSignUpTenant />} />
            <Route
              path="/create-maintenance-request"
              element={<CreateMaintenanceRequest />}
            />
            <Route path="/*" element={<TenantHome />} />
            {/* <Route path="/*" element={<AllRents />} /> */}
            <Route path="/rents"element={<AllRents name="rents" displayName="All rents" />}/>
            <Route path="/rents/:rentId"element={<Rent name="Rent" displayName="Rent" />}/>
            <Route path="/cart"element={<CartView name="cart" displayName="Cart" />}/>
            <Route path="/addRent"element={<AddRent name="addRent" displayName="Add Rent" />}/>
            <Route path="/checkout" element={<Checkout name="checkout" displayName="checkout" />}/>
            <Route path="/myOrders"element={<OrderHistory name="orderHistory" displayName="order history" />}/>
          </Routes>
        ) : (
          ////////// IF Logged in as a Landlord show this Routes///////
          <Routes>
            <Route path="/signup-landlord" element={<AfterSignUpLandlord />} />
            <Route path="/add-property" element={<AddAProperty />} />
            <Route path="/add-unit" element={<AddAUnit />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/workorders/:id" element={<SingleMaintenanceRequest />} />
            <Route path="/workorders" element={<MaintenanceRequest />} />
            <Route path="/tenants" element={<AllTenants />} />
            <Route path="/profile-page" element={<LandlordProfile />} />
            <Route path="add-tenant-unit" element={<AddTenantToUnit />} />
            <Route path="/addRent"element={<AddRent name="addRent" displayName="Add Rent" />}/>
            <Route path="/rents"element={<AllRents name="rents" displayName="All rents" />}/>
            <Route path="/rents/:rentId"element={<Rent name="Rent" displayName="Rent" />}/>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/*" element={<Dashboard />} />
          </Routes>
        )
      ) : (
        ///////// IF Not Logged in Show this Routes ////////////
        <Routes>

          {/* IF you wanna test a Route and troubleshooting it put it here make sure to take it out later and put it where it belongs */}

          <Route path="/login" element={<AuthForm name="login" displayName="Login" />} />
          <Route path="/signup" element={<AuthFormSignup name="signup" displayName="Sign Up" />} />
          <Route path="/home" element={<Home name="home" displayName="Pangea" />} />
          <Route path="/*" element={<Home name="home" displayName="Pangea" />} />



          {/* IF you wanna test a Route and troubleshooting it put it here make sure to take it out later and put it where it belongs */}


        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
