import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
// import Landlord from '../../server/db/models/Landlord';
import AuthForm from "../features/auth/AuthForm";
import TenantHome from "../features/tenant/home/TenantHome.jsx";
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
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
