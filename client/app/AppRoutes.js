import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
// import Landlord from '../../server/db/models/Landlord';
import AuthForm from "../features/auth/AuthForm";
import MaintenanceRequest from '../features/maintenanceRequest/MaintenanceRequest';
import SingleMaintenanceRequest from "../features/maintenanceRequest/SingleMaintenanceRequest";
import TenantHome from "../features/tenant/home/TenantHome.jsx";
import MaintenanceReq from "../features/tenant/maintenanceReq/MaintenanceReq.jsx";
import Messages from "../features/tenant/messages/Messages.jsx";
import MakeAPayment from "../features/tenant/payments/MakeAPayment.jsx";
import PastPayments from "../features/tenant/payments/PastPayments.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";


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
        <Routes>
          <Route path="/*" element={<Dashboard />} />
          <Route to="/tenanthome" element={<TenantHome />} />
          <Route to="/makeapayment" element={<MakeAPayment />} />
          <Route to="/pastpayments" element={<PastPayments />} />
          <Route to="/maintenancereq" element={<MaintenanceReq />} />
          <Route to="/messages" element={<Messages />} />
          {/* <Route to='/landlords' element={<Landlord />} /> */}
        </Routes>
      ) : (
        <Routes>
        <Route path="/*" element={<Dashboard />} />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
          <Route
            path="/tenanthome"
            element={<TenantHome name="tenanthome" displayName="Tenant Home" />}
          />
          <Route

            path="/makeapayment"
            element={<MakeAPayment name="makeapayment" displayName="Make A Payment" />}
          />
          <Route
            path="/pastpayments"
            element={<PastPayments name="pastpayments" displayName="Past Payments" />}
          />
          <Route
            path="/maintenancereq"
            element={<MaintenanceReq name="maintenancereq" displayName="Maintenance Request" />}
          />
          <Route
            path="/messages"
            element={<Messages name="messages" displayName="Messages" />}

            path='/workorders'
            element={<MaintenanceRequest name="workOrders" displayName="Work Orders" />}
          />
          <Route
            path='/workorders/:id'
            element={<SingleMaintenanceRequest name="workOrder" displayName="Work Order" />}
          />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
