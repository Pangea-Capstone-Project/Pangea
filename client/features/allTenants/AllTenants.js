import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTenantsAsync, selectTenants } from "./allTenantsSlice";
import { fetchUnitsAsync, selectUnits } from "../units/unitsSlice";
import styled from "styled-components";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import {
  FaHome
} from "react-icons/fa";
import { Link } from "react-router-dom";


const StyledLandlordProfile = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProfileImage = styled.div`
  width: 15rem;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const ProfileItem = styled.p`
  font-size: 14px;
  margin: 10px;
`;

const TenantWrapper = styled.div`
  width: 20%;
  height: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  background-color: #eee;
  box-shadow: 2px 2px 5px rgba(1, 2, 3, 0.2);
`;

const ProfileSection = styled.section`
  background: linear-gradient(
    90deg,
    rgba(246, 246, 246, 1) 0%,
    rgba(214, 228, 240, 1) 44%,
    rgba(30, 86, 160, 1) 79%,
    rgba(22, 49, 114, 1) 99%
  );
  background-color: #fff;
  flex: 7;
  width: 50%;
  padding: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: auto;
`;

 const AllTenants = () => {
  const dispatch = useDispatch();
  const tenants = useSelector(selectTenants);
  const units = useSelector(selectUnits);
  console.log(`tenants`, tenants);
  console.log(`units`, units);
  useEffect(() => {
    dispatch(fetchTenantsAsync());
    dispatch(fetchUnitsAsync());
  }, [dispatch]);
  return (
    <StyledLandlordProfile>
      <Sidebar />
        <ProfileSection>
        {tenants.map((tenant) => {
          const matchingUnit = units.find(
            (unit) => unit.id === tenant.unitId
            );

          return (
            <TenantWrapper key={tenant.id}>
              <ProfileImage>
                <FaHome />#{tenant.unitIdToAssociateTenant}
              </ProfileImage>
              <ProfileItem>{tenant.name}</ProfileItem>
              <ProfileItem>Phone Number:{tenant.phoneNumber}</ProfileItem>
              <ProfileItem>Email: {tenant.email}</ProfileItem>
              <ProfileItem>Username: {tenant.username}</ProfileItem>
              <ProfileItem>Birth Date: {tenant.dateOfBirth}</ProfileItem>
              <ProfileItem>leaseStartDate: {tenant.leaseStartDate}</ProfileItem>
              <ProfileItem>leaseEndDate: {tenant.leaseEndDate}</ProfileItem>
              <ProfileItem>Rent:{tenant.rentAmount}</ProfileItem>
              <ProfileItem> Status: {tenant.rentPaid ? "Paid" : "Owed"}</ProfileItem>
            </TenantWrapper>
          );
        })}
      </ProfileSection>
    </StyledLandlordProfile>
  );
};

export default AllTenants;
