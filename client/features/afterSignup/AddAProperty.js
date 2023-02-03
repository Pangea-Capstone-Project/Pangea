import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProperty, getLandlordId } from "./AddAPropertySlice";
import { selectMe } from "../auth/authSlice";
import styled from "styled-components";
import AddAUnit from "./AddAUnit";
import LandlordNavbar from "../navbar/LandlordNavbar";

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
width: 60%;
font-size: 1.2em;
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

const CreateProperty = () => {
  const dispatch = useDispatch();
  const me = useSelector(selectMe);
  const [propertyName, setPropertyName] = useState("");
  const [address, setAddress] = useState("");
  const [landlordId, setLandlordId] = useState(null);
  const [showAddUnitButton, setShowAddUnitButton] = useState(false);
  const [showAddAUnit, setShowAddAUnit] = useState(false);

  useEffect(() => {
    const fetchLandlordId = async () => {
      const landlordId = await dispatch(getLandlordId(me.id));
      setLandlordId(landlordId);
    };
    fetchLandlordId();
  }, [dispatch, me.id]);

  const handlePropertyNameChange = (event) => {
    setPropertyName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!propertyName || !address) {
      alert("Missing Fields");
      return;
    }

    if (landlordId) {
      dispatch(
        createProperty(me.id, {
          propertyName,
          address,
          userId: me.id,
        })
      );
      setShowAddUnitButton(true);
    }
  };
  

  const handleClick = () => {
    setShowAddAUnit(true);
  };
  return (
    <div>
      <LandlordNavbar />
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          id="propertyName"
          value={propertyName}
          onChange={handlePropertyNameChange}
          placeholder="Property Name"
        />
        <Input
          type="text"
          id="address"
          value={address}
          onChange={handleAddressChange}
          placeholder="Address"
        />
        <Button type="submit">Add Property</Button>
      </Form>
      {showAddUnitButton && (
        <Button type="button" onClick={handleClick}>
          Add Unit
        </Button>
      )}
      {showAddAUnit && <AddAUnit />}
    </div>
  );
};

export default CreateProperty;
