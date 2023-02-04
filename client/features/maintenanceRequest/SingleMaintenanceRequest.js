import React, { useEffect } from "react";
import {
  fetchSingleMaintenanceRequestAsync,
  selectMaintenanceRequest,
} from "./singleMaintenanceRequestSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import LandlordNavbar from "../navbar/LandlordNavbar";

const WorkOrdersContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #163172;
  margin: 10px;
  padding: 20px;
  border-radius: 5px;
  height:400px;
  text-align: center;
  box-shadow: 0 4px 8px 0 #d6e4f0;
  position: relative;
  margin-bottom: 5.5%;
  &.low-severity {
    background-color: #f6f6f6;
  }
  &.high-severity {
    background-color: #f92a2a;
  }
  &.medium-severity {
    background-color: #f9a51a;
  }
`;


const Unit = styled.p`
font-weight: bold;
font-size: 2rem;
font-family: "Montserrat", sans-serif;
background-color: #1e56a0;
color: #fff;
padding: 2px 4px;
border-radius: 5px;
`;

const Button = styled.button `
background-color: #163172;
color: #fff; 
padding: 10px 20px; 
border-radius: 5px;
border: none; 
font-size: 1rem;
font-weight: bold;
&:hover { background-color: #1e56a0; cursor: pointer; }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Image = styled.img`
  position: absolute;
  left: 25%;
  top: 50%;
  transform: translateY(-50%);
`;


const SingleMaintenanceRequest = () => {
const { id } = useParams();
const isLoggedIn = useSelector((state) => !!state.auth.me.id);
const maintenanceRequest = useSelector(selectMaintenanceRequest);
console.log(`maintenanceReq`,maintenanceRequest)
const dispatch = useDispatch();

useEffect(() => {
dispatch(fetchSingleMaintenanceRequestAsync(id));
}, [dispatch]);

const { type, severity, description, imageUrl } =
maintenanceRequest.maintenanceRequest;
return (
  <div>
    <LandlordNavbar />
    <WorkOrdersContainer className={severity === "Low" ? "low-severity" : (severity === "Medium" ? "medium-severity" : "high-severity")}>
      <Unit>Unit: #123</Unit>
      <p>Type: {type}</p>
      <p>Severity: {severity}</p>
        <p>{description}</p>
      <ImageContainer>
        <Image src={imageUrl} alt="placeholder" />
      </ImageContainer>
      <Button> Respond </Button>
    </WorkOrdersContainer>
  </div>
);
};

export default SingleMaintenanceRequest;