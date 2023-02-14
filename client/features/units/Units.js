import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUnitsAsync, selectUnits } from "./unitsSlice";
import styled from "styled-components";
import Sidebar from "../../components/sidebar/Sidebar.jsx";

const Container = styled.div`
display:flex;
height: 98vh;
margin-left: 17vw;
width: 83vw;
justify-content: center;
flex-direction: row
background: rgb(246,246,246);
background: linear-gradient(90deg, rgba(246,246,246,1) 0%, rgba(214,228,240,1) 44%, rgba(30,86,160,1) 79%, rgba(22,49,114,1) 99%);
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
    dispatch(fetchUnitsAsync())
    
  }, [dispatch]);

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
                <UnitImage src={`/units/${unit.image}`} alt="image" />
                <p>Bedrooms: {unit.bedrooms}</p>
              </UnitItem>
            );
          })}
      </UnitContainer>
    </Container>
  );
};

export default Units;
