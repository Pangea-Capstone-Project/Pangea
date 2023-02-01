import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMaintenanceRequestAsync,
  selectMaintenanceRequests,
} from "./allMaintenanceRequestSlice";
import { Link } from "react-router-dom";
import styled from "styled-components";

const WorkOrdersContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
`;
const LinkContainer = styled.div`
  background-color: #f6f6f6;
  color: #163172;
  margin: 10px;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 8px 0 #d6e4f0;
  position: relative;
  margin-bottom: 17.6%;
  &.medium-severity {
    background-color: #f9a51a;
  }
  &.high-severity {
    background-color: #f92a2a;
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

const Unit = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  font-weight: bold;
  font-size: 0.8rem;
  font-family: "Montserrat", sans-serif;
  background-color: #1e56a0;
  color: #fff;
  padding: 2px 4px;
  border-radius: 5px;
`;

const PreviewContainer = styled.div`
  position: absolute;
  background-color: #f6f6f6;
  color: #163172;
  margin: 10px;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 8px 0 #d6e4f0;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &.medium-severity {
    background-color: #f9a51a;
  }
  &.high-severity {
    background-color: #f92a2a;
  }
  display: ${({ isPreviewVisible }) => (isPreviewVisible ? "block" : "none")};
`;

const MaintenanceRequest = () => {
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [selectedMaintenanceRequest, setSelectedMaintenanceRequest] = useState(
    {}
  );
  const maintenanceRequests = useSelector(selectMaintenanceRequests);

  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMaintenanceRequestAsync());
  }, [dispatch]);

  // const handleClick = (maintenanceRequest) => {
  //   setIsPreviewVisible(!isPreviewVisible);
  //   setSelectedMaintenanceRequest(maintenanceRequest);
  // };

  const handleMouseEnter = (maintenanceRequest) => {
    setIsPreviewVisible(true);
    setSelectedMaintenanceRequest(maintenanceRequest);
  };

  const handleMouseLeave = () => {
    setIsPreviewVisible(false);
  };
  return (
    <div>
      <MainContainer>
        <h1>Work Orders</h1>
      </MainContainer>
      <WorkOrdersContainer>
        {maintenanceRequests.map((maintenanceRequest) => (
          <LinkContainer
          className={`
          ${
            maintenanceRequest.severity.toLowerCase().charAt(0) === "l"
            ? ""
            : maintenanceRequest.severity.toLowerCase().charAt(0) === "m"
            ? "medium-severity"
            : "high-severity"
          }
          `}
          onMouseEnter={() => handleMouseEnter(maintenanceRequest)}
          onMouseLeave={handleMouseLeave}
          >
            <Link to={`/workOrders/${maintenanceRequest.id}`}>
            <Unit>Unit:123{maintenanceRequest.unitId}</Unit>
            <p>Severity: {maintenanceRequest.severity}</p>
            <p>{maintenanceRequest.type}</p>
            </Link>
          </LinkContainer>
        ))}
        {isPreviewVisible && (
          <PreviewContainer
          isPreviewVisible={isPreviewVisible}
          className={`
          ${
            selectedMaintenanceRequest.severity.toLowerCase().charAt(0) === "l"
            ? ""
            : selectedMaintenanceRequest.severity.toLowerCase().charAt(0) ===
            "m"
              ? "medium-severity"
              : "high-severity"
            }
            `}
            >
            <p style={{ fontWeight: "bold" }}>
              Unit: #123{selectedMaintenanceRequest.unit}</p>
            <p>Severity: {selectedMaintenanceRequest.severity}</p>
            <p>Type: {selectedMaintenanceRequest.type}</p>
            <p>Description: {selectedMaintenanceRequest.description}</p>
            <p>Requested by: Bofa Deez</p>
          </PreviewContainer>
        )}
      </WorkOrdersContainer>
    </div>
  );
};

export default MaintenanceRequest;