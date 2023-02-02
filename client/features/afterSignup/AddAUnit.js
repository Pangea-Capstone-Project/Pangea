import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUnit } from './AddAUnitSlice';
import styled from "styled-components";
import { selectProperties, fetchPropertiesAsync } from '../property/propertySlice';
const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
background-color: #F6F6F6;
padding: 20px;
border-radius: 10px;
width: 80%;
margin: 20px auto;
background-color: #f2f2f2;
box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;


const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
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

const UnitForm = () => {
  const [unit, setUnit] = useState({
    unitNumber: '',
    rentAmount: '',
    bedrooms: '',
    propertyId: '',
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPropertiesAsync()).then(() => {
      console.log(`i fired off`, properties);
    });
  }, [dispatch]);

  const properties = useSelector(selectProperties);
  console.log(`properties`, properties)

  const handleChange = (event) => {
    setUnit({ ...unit, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createUnit({ ...unit }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="unitNumber"
        value={unit.unitNumber}
        onChange={handleChange}
        placeholder="Unit#"
      />
      <Input
        type="number"
        name="rentAmount"
        value={unit.rentAmount}
        onChange={handleChange}
        placeholder="Rent Amount"
      />
      <Input
        type="number"
        name="bedrooms"
        value={unit.bedrooms}
        onChange={handleChange}
        placeholder="Bedrooms"
      />
      <div>
        <select
          name="propertyId"
          value={unit.propertyId}
          onChange={handleChange}
        >
          <option value="">Select Property</option>
          {properties.map(property => (
            <option key={property.id} value={property.id}>
              {property.propertyName}
            </option>
          ))}
        </select>
      </div>
      <Button type="submit">Create Unit</Button>
    </Form>
  );
};

export default UnitForm;