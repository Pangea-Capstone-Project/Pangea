import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPropertiesAsync, selectProperties } from "./propertySlice.js";
import styled from "styled-components";
import Sidebar from "../../components/sidebar/Sidebar.jsx";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  
`;

const PropertyContainer = styled.div`
  display: flex;
  margin: 2rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  text-align: center;
  padding-left: 2rem;
  flex: 6;
  width: 50rem;
  height: 55rem;
  overflow: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    background-color: transparent;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const PropertyItem = styled.div`
  align-items: center;
  margin: 1rem;
`

const PropertyImage = styled.img`
  width: 15rem;
  height: 15rem;
`;
const Units = () => {
  const dispatch = useDispatch();
  const properties = useSelector(selectProperties);

  useEffect(() => {
    dispatch(fetchPropertiesAsync());
  }, [dispatch]);

  return (
    <Container>
      <Sidebar />
      <PropertyContainer>
        {properties &&
          Array.isArray(properties) &&
          properties.map((property) => {
            return (
              <PropertyItem key={property.id}>
                <p>property#: {property.propertyName}</p>
                <PropertyImage src={`${property.image}`} alt="image" />
                <p>Units Available: {property.numberOfUnits}</p>
              </PropertyItem>
            );
          })}
      </PropertyContainer>
    </Container>
  );
};

export default Units;
