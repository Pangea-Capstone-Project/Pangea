import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTenantsAsync, selectTenants } from "./allTenantsSlice";
import { fetchUnitsAsync, selectUnits } from "../units/unitsSlice";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 15%;
  flex-wrap: wrap;
  align-items: center;
  padding: 2rem;
`;


const TenantContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #F6F6F6;
  box-shadow: 2px 2px 2px #ccc;
  margin: 1rem 0;
  padding: 1rem;
  width: 500px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #D6E4F0;
  width: 50%;
  padding: 1rem;
  border-radius: 10px 0 0 10px;
  flex: 1;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1E56A0;
  color: #fff;
  width: 50%;
  padding: 1rem;
  border-radius: 0 10px 10px 0;
  flex: 1;
`;


const AllTenants = () => {
  const dispatch = useDispatch();
  const tenants = useSelector(selectTenants);
  const units = useSelector(selectUnits);

  useEffect(() => {
    dispatch(fetchTenantsAsync());
    dispatch(fetchUnitsAsync());
    console.log(`tenants`, tenants);
    console.log(`units`, units);
  }, [dispatch]);

  return (
    <Container>
      <h1 style={{ color: "#163172" }}>All Tenants</h1>
      <div>
        {tenants.map((tenant) => {
          const matchingUnit = units.find((unit) => unit.id === tenant.unitId);

          return (
            <TenantContainer key={tenant.id}>
                <p style={{ color: "#163172" }}>Unit: {tenant.unitId}</p>
              <LeftContainer>
                <p style={{ color: "#163172" }}>{tenant.name}</p>
                <p style={{ color: "#163172" }}>{tenant.email}</p>
              </LeftContainer>
              <RightContainer>
                <p>Rent Owed : {matchingUnit?.rentAmount}</p>
                <p>Status: {tenant.rentPaid ? "Paid" : "Owed"}</p>
              </RightContainer>
            </TenantContainer>
          );
        })}
      </div>
    </Container>
  );
};

export default AllTenants;