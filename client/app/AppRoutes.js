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
import { selectMe } from "../features/auth/authSlice";


// const AppRoutes = () => {
//   const isLoggedIn = useSelector((state) => !!state.auth.me.id);
//   const me = useSelector(selectMe);

//   return (
//     ////////// IF Logged in as a Tenant Show this Routes /////////////
//     <div>
    
//       {isLoggedIn && me.role === "tenant" ? (
//         <Routes>
//           <Route path="/tenanthome" element={<TenantHome />} />
//           <Route path="/makeapayment" element={<MakeAPayment />} />
//           <Route path="/pastpayments" element={<PastPayments />} />
//           <Route path="/maintenancereq" element={<MaintenanceReq />} />
//           <Route path="/messages" element={<Messages />} />
//         </Routes>
//       ) : ////////// IF Logged in as a Landlord show this Routes///////
//       isLoggedIn && me.role === "landlord" ? (
//         <Routes>
//           <Route path="/signup-landlord" element={<AfterSignUpLandlord />} />
//           <Route path="/signup-tenant" element={<AfterSignUpTenant />} />
//           <Route path="/add-property" element={<AddAProperty/>} />
//           <Route path="/add-unit" element={<AddAUnit/>} />
//           <Route path="/dashboard" element={<Dashboard />} /> 
//           <Route path="/workorders/:id" element={<SingleMaintenanceRequest />}/>
//           <Route path="/workorders" element={<MaintenanceRequest />} />
//           <Route path="/tenants" element={<AllTenants/>} />
//           {/* <Route path="/*" element={<Dashboard />} /> */}

//         </Routes>
//       ) : (
//         ///////// IF Not Logged in Show this Routes ////////////

//         <Routes>
//           <Route
//             path="/login"
//             element={<AuthForm name="login" displayName="Login" />}
//           />

//           <Route
//             path="/signup"
//             element={<AuthFormSignup name="signup" displayName="Sign Up" />}
//           />

//           <Route
//             path="/home"
//             element={<Home name="home" displayName="Pangea" />}
//           />

//           {/* <Route
//             path="/*"
//             element={<Home name="home" displayName="Pangea" />}
//           /> */}
//         </Routes>
//       )}
//     </div>
//   );
// };

// export default AppRoutes;



const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const userLoggedIn = useSelector(selectMe);

  const dispatch = useDispatch();

  console.log(`userLoggedIn`,userLoggedIn)
  console.log(`isLoggedIn`, isLoggedIn)
  console.log(`localStorage.getItem('token')`,localStorage.getItem('token'))

  useEffect(() =>{
    dispatch(me())
  },[])



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
          </Routes>
        ) : 
        ////////// IF Logged in as a Landlord show this Routes///////
       ( 
          <Routes>
            <Route path="/signup-landlord" element={<AfterSignUpLandlord />} />
            <Route path="/add-property" element={<AddAProperty />} />
            <Route path="/add-unit" element={<AddAUnit />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/workorders/:id" element={<SingleMaintenanceRequest />} />
            <Route path="/workorders" element={<MaintenanceRequest />} />
            <Route path="/tenants" element={<AllTenants />} />
          </Routes>
        )
      ) : (
        ///////// IF Not Logged in Show this Routes ////////////
        <Routes>
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




//ORIGINAL CODE

// return (
//   <div>
//     {isLoggedIn ? (
//       //all routes here works when logged in
//       <Routes>
//         <Route path="/signup-landlord" element={<AfterSignUpLandlord />} />
//         <Route path="/signup-tenant" element={<AfterSignUpTenant />} />
//         <Route path="/tenanthome" element={<TenantHome />} />
//         <Route path="/makeapayment" element={<MakeAPayment />} />
//         <Route path="/pastpayments" element={<PastPayments />} />
//         <Route path="/maintenancereq" element={<MaintenanceReq />} />
//         <Route path="/messages" element={<Messages />} />
//         <Route path="/landlordhome" element={<Dashboard />} />
//         {/* <Route to='/landlords' element={<Landlord />} /> */}

//         {/* Route after signing up Landlord */}

//         <Route
//           path="/signup-landlord"
//           element={<AfterSignUpLandlord name="signup-landlord" displayName="Landlord Signup" />}
//         />
//         <Route
//           path="/signup-tenant"
//           element={<AfterSignUpTenant name="ssignup-tenant" displayName="Tenant Signup" />}
//         />


//         <Route
//           path="/tenanthome"
//           element={<TenantHome name="tenanthome" displayName="Tenant Home" />}
//         />
//         <Route
//           path="/makeapayment"
//           element={
//             <MakeAPayment name="makeapayment" displayName="Make A Payment" />
//           }
//         />
//         <Route
//           path="/pastpayments"
//           element={
//             <PastPayments name="pastpayments" displayName="Past Payments" />
//           }
//         />
//         <Route
//           path="/maintenancereq"
//           element={
//             <MaintenanceReq
//               name="maintenancereq"
//               displayName="Maintenance Request"
//             />
//           }
//         />
//         <Route
//           path="/messages"
//           element={<Messages name="messages" displayName="Messages" />}
//         />

//         {/* This route is for landlord View Workorders */}

//         <Route
//           path="/workorders"
//           element={
//             <MaintenanceRequest name="workorders" displayName="Work Orders" />
//           }
//         />
//         <Route
//           path="/workorders/:id"
//           element={
//             <SingleMaintenanceRequest
//               name="workorder"
//               displayName="Work Order"
//             />
//           }
//         />
//         {/* This route is for landlord View All Tenants */}
//         <Route
//           path="/tenants"
//           element={<AllTenants name="tenants" displayName="Tenants" />}
//         />
//       </Routes>
//     ) : (
//       <Routes>
//         <Route
//           path="/login"
//           element={<AuthForm name="login" displayName="Login" />}
//         />
//         <Route
//           path="/signup"
//           element={<AuthFormSignup name="signup" displayName="Sign Up" />}
//         />
//         {/* <Route path="/*" element={<Dashboard />} /> */}

//         {/* <Route
//         path="/*"
//         element={<Home name="home" displayName="Pangea" />}
//       />
//       <Route
//         path="/home"
//         element={<Home name="home" displayName="Pangea" />}
//       /> */}
//       </Routes>
//     )}
//   </div>
// );
// };

// export default AppRoutes;