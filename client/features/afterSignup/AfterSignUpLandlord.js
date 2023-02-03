import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateLandlord } from './afterSignUpLandlordSlice';
import { selectMe } from "../auth/authSlice";
import { useNavigate } from 'react-router-dom';
import AddAProperty from './AddAProperty'


import styled from 'styled-components';
import LandlordNavbar from '../navbar/LandlordNavbar';

const FormWrapper = styled.div`
  background-color: #F6F6F6;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  margin: 20px auto;
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;
const StyledForm = styled.form`
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

const StyledInput = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 60%;
  font-size: 1.2em;
  border-radius: 5px;
  border: none;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;

const StyledButton = styled.button`
  margin: 20px 0;
  padding: 10px 20px;
  background-color: #1E56A0;
  color: #fff; 
  font-size: 1.2em;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #163172;
    color: #F6F6F6;
  }
`;

const StyledAddAPropertyButton = styled.button`
  margin: 20px 0;
  padding: 10px 20px;
  background-color: #1E56A0;
  color: #fff; 
  font-size: 1.2em;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #163172;
    color: #F6F6F6;
  }
`;



const UpdateLandlordForm = () => {
  const me = useSelector(selectMe)
  console.log(`me`,me)
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [idForTenantToAssociate, setIdForTenantToAssociate] = useState('');
  const navigate = useNavigate();


  const [showAddAProperty, setShowAddAProperty] = useState(false);


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleIdForTenantToAssociateChange = (event) => {
    setIdForTenantToAssociate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateLandlord(me.id, {
      name,
      phoneNumber,
      email,
      idForTenantToAssociate,
    }));
  };

  const handleClick = () => {
    setShowAddAProperty(true);
  };
  return (
      <FormWrapper>
        <LandlordNavbar />
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
          />
        <StyledInput
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          placeholder="Phone Number"
          />
        <StyledInput
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          />
        <StyledInput
          type="number"
          name="idForTenantToAssociate"
          value={idForTenantToAssociate}
          onChange={handleIdForTenantToAssociateChange}
          placeholder="ID for Tenant to Associate"
          />
        <StyledButton type="submit">Update Landlord</StyledButton>
      </StyledForm>
      <StyledAddAPropertyButton onClick={handleClick}>Add Property</StyledAddAPropertyButton>
      {showAddAProperty && <AddAProperty />}
          </FormWrapper>
    );
};

export default UpdateLandlordForm
