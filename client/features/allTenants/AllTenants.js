import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTenantsAsync, selectTenants } from "./allTenantsSlice";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AllTenants = () => {
    const isLoggedIn = useSelector((state) => !!state.auth.me.id);
    const dispatch = useDispatch();
    const tenants = useSelector(selectTenants);

    useEffect(() => {
        dispatch(fetchTenantsAsync());
        console.log(`hi im tenants`,tenants)
      }, [dispatch]);
  
    return (
    <>
    <h1>Tenants</h1>
    <div>
        {tenants.map((tenant) =>(
        <div>
        <p>{tenant.name}</p>
        <p>{tenant.rentPaid}</p>
        <p>{tenant.email}</p>
        </div>
        ))}
    </div>
    
    
    
    </>
  )
}

export default AllTenants