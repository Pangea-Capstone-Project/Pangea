import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AllTenants from "../features/allTenants/AllTenants";
// import Landlord from '../../server/db/models/Landlord';
import AuthForm from "../features/auth/AuthForm";
import MaintenanceRequest from "../features/maintenanceRequest/MaintenanceRequest";
import SingleMaintenanceRequest from "../features/maintenanceRequest/SingleMaintenanceRequest";
import TenantHome from "../features/tenant/home/TenantHome.jsx";
import MaintenanceReq from "../features/tenant/maintenanceReq/MaintenanceReq.jsx";
import Messages from "../features/tenant/messages/Messages.jsx";
import MakeAPayment from "../features/tenant/payments/MakeAPayment.jsx";
import PastPayments from "../features/tenant/payments/PastPayments.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import AuthFormSignup from "../features/auth/AuthFormSignup";
import AfterSignUpLandlord from "../features/afterSignup/AfterSignUpLandlord";
import AfterSignUpTenant from "../features/afterSignup/AfterSignUpTenant";
import AddAProperty from "../features/afterSignup/AddAProperty";
import { me } from "./store";

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        //all routes here works when logged in
        <Routes>
          <Route path="/signup-landlord" element={<AfterSignUpLandlord />} />
          <Route path="/signup-tenant" element={<AfterSignUpTenant />} />
          <Route path="/add-property" element={<AddAProperty/>} />
          <Route path="/tenanthome" element={<TenantHome />} />
          <Route path="/makeapayment" element={<MakeAPayment />} />
          <Route path="/pastpayments" element={<PastPayments />} />
          <Route path="/maintenancereq" element={<MaintenanceReq />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/*" element={<Dashboard />} />
          {/* <Route to='/landlords' element={<Landlord />} /> */}
          
          {/* Route after signing up Landlord */}
          
          <Route
            path="/signup-landlord"
            element={<AfterSignUpLandlord name="signup-landlord" displayName="Landlord Signup" />}
          />
          <Route
            path="/signup-tenant"
            element={<AfterSignUpTenant name="signup-tenant" displayName="Tenant Signup" />}
          />
          <Route
            path="/add-property"
            element={<AddAProperty name="add-property" displayName="Add Property" />}
          />


          <Route
            path="/tenanthome"
            element={<TenantHome name="tenanthome" displayName="Tenant Home" />}
          />
          <Route
            path="/makeapayment"
            element={
              <MakeAPayment name="makeapayment" displayName="Make A Payment" />
            }
          />
          <Route
            path="/pastpayments"
            element={
              <PastPayments name="pastpayments" displayName="Past Payments" />
            }
          />
          <Route
            path="/maintenancereq"
            element={
              <MaintenanceReq
                name="maintenancereq"
                displayName="Maintenance Request"
              />
            }
          />
          <Route
            path="/messages"
            element={<Messages name="messages" displayName="Messages" />}
          />

          {/* This route is for landlord View Workorders */}

          <Route
            path="/workorders"
            element={
              <MaintenanceRequest name="workorders" displayName="Work Orders" />
            }
          />
          <Route
            path="/workorders/:id"
            element={
              <SingleMaintenanceRequest
                name="workorder"
                displayName="Work Order"
              />
            }
          />
          {/* This route is for landlord View All Tenants */}
          <Route
            path="/tenants"
            element={<AllTenants name="tenants" displayName="Tenants" />}
          />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthFormSignup name="signup" displayName="Sign Up" />}
          />
          {/* <Route path="/*" element={<Dashboard />} /> */}
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;