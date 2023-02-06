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
const Form = styled.form`
  background-color: #f6f6f6;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  margin: 10px 0;
  font-weight: bold;
  color: #1e56a0;
`;

const Select = styled.select`
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #d6e4f0;
  padding: 10px;
  font-size: 16px;
  margin: 10px 0;
`;

const Button = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 10px;
  background-color: #163172;
  color: white;
  font-weight: bold;
  border: none;
  margin: 20px 0;
  cursor: pointer;
  &:hover {
    background-color: #1e56a0;
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
    <div>
      <LandlordNavbar />
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
    </div>
  );
}

export default NewTenant;