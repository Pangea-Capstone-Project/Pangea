import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUnitsAsync, selectUnits } from "./unitsSlice";
import styled from "styled-components";
import Sidebar from "../../components/sidebar/Sidebar.jsx";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  
`;

const UnitContainer = styled.div`
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

const UnitItem = styled.div`
  align-items: center;
  margin: 1rem;
`

const UnitImage = styled.img`
  width: 15rem;
  height: 15rem;
`;
const Units = () => {
  const dispatch = useDispatch();
  const units = useSelector(selectUnits);

  useEffect(() => {
    units.forEach(unit => {
      const img = new window.Image();
      img.src = unit.image;
    });
    dispatch(fetchUnitsAsync());
  }, [dispatch, units]);

  return (
    <Container>
      <Sidebar />
      <UnitContainer>
        {units &&
          Array.isArray(units) &&
          units.map((unit) => {
            return (
              <UnitItem key={unit.id}>
                <p>Unit#: {unit.unitNumber}</p>
                <UnitImage src={`${unit.image}`} alt="image" />
                <p>Bedrooms: {unit.bedrooms}</p>
              </UnitItem>
            );
          })}
      </UnitContainer>
    </Container>
  );
};

export default Units;
