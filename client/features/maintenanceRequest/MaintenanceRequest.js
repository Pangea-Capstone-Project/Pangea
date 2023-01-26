import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMaintenanceRequestAsync,
  selectMaintenanceRequests,
} from "./maintenanceRequestSlice";
import { Link } from "react-router-dom";
import styled from "styled-components";

const WorkOrdersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const LinkContainer = styled.div`
  background-color: #F6F6F6;
  color: #163172;
  margin: 10px;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 8px 0 #D6E4F0;
  &.last-child {
    margin-bottom: 250px;
  }
`;

const p = styled.p`
  font-weight: bold;
`;
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
`;

const MaintenanceRequest = () => {
  const maintenanceRequests = useSelector(selectMaintenanceRequests);

  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMaintenanceRequestAsync());
  }, [dispatch]);


  const lastIndex = maintenanceRequests.length - 1;
  return (
    <div>
      <MainContainer>
        <h1>Work Orders</h1>
      </MainContainer>
      <WorkOrdersContainer>
        {maintenanceRequests.map((maintenanceRequest, index) => (
          <LinkContainer className={index === lastIndex ? "last-child" : ""}>
            <p>{maintenanceRequest.type}</p>
            <p>{maintenanceRequest.severity}</p>
            <p>{maintenanceRequest.description}</p>
            <p>{maintenanceRequest.imageUrl}</p>
          </LinkContainer>
        ))}
      </WorkOrdersContainer>
    </div>
  );
};

export default MaintenanceRequest;
