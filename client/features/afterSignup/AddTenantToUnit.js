import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { selectUnits, fetchUnitsAsync } from "../units/unitsSlice";
import {
  selectTenants,
  fetchTenantsAsync,
} from "../allTenants/allTenantsSlice";
import { associateTenantWithUnit } from "./AddTenantToUnitSlice";
import LandlordNavbar from "../navbar/LandlordNavbar";
import { FaRegBuilding, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar.jsx";

const Container = styled.div`
display:flex;
flex-direction: row
background: rgb(246,246,246);
background: linear-gradient(90deg, rgba(246,246,246,1) 0%, rgba(214,228,240,1) 44%, rgba(30,86,160,1) 79%, rgba(22,49,114,1) 99%);
;`

const Form = styled.form`
display: flex;
flex:7;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #F6F6F6;
padding: 20px;
width: 80rem;
height:20rem;
margin: 20px auto;
background-color: #f2f2f2;
box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;

const Label = styled.label`
margin: 10px 0;
padding: 10px;
width: 20rem;
font-size: 1.2em;
box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;

const Select = styled.select`
  width: 10rem;
  height: 3rem;
  border: 1px solid #d6e4f0;
  padding: 10px;
  font-size: 16px;
  margin: 10px 0;
`;

const Button = styled.button`
margin-top: 20px;
padding: 10px 20px;
font-size: 18px;
background-color: #1e56a0;
color: #fff;
border-radius: 5px;
border: none;
box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
cursor: pointer;
&:hover {
  background-color: #163172;
  color: #f6f6f6;
}
`;

function NewTenant() {
  const unit = useSelector(selectUnits);
  const tenant = useSelector(selectTenants);
  const navigate = useNavigate();
  const [selectedUnitId, setSelectedUnitId] = useState(null);
  const [selectedTenantId, setSelectedTenantId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUnitsAsync());
    dispatch(fetchTenantsAsync());
  }, [dispatch]);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(
      associateTenantWithUnit({
        unitId: selectedUnitId,
        tenantId: selectedTenantId,
      })
      );
      navigate('/dashboard')
  }
  return (
    <Container>
      <Sidebar />
      <Form onSubmit={handleSubmit}>
        <Label>
          Tenant Name:
          <Select
            value={selectedTenantId || ""}
            onChange={(e) => setSelectedTenantId(e.target.value)}
          >
            <option value="">Tenants</option>
            {tenant.map((aTenant) => (
              <option key={aTenant.id} value={aTenant.id}>
                {aTenant.name}
              </option>
            ))}
          </Select>
        </Label>

        <Label>
          Select Unit#:
          <Select
            value={selectedUnitId || ""}
            onChange={(e) => setSelectedUnitId(e.target.value)}
          >
            <option value="">Units</option>
            {unit.map((unit) => (
              <option key={unit.id} value={unit.id}>
                {unit.unitNumber}
              </option>
            ))}
          </Select>
        </Label>

        <Button type="submit">Add Tenant</Button>
      </Form>
    </Container>
  );
}

export default NewTenant;