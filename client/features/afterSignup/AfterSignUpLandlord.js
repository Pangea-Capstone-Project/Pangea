import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateLandlord } from './afterSignUpLandlordSlice';
import { selectMe } from "../auth/authSlice";

const UpdateLandlordForm = () => {
  const me = useSelector(selectMe)
  console.log(`me`,me)
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [idForTenantToAssociate, setIdForTenantToAssociate] = useState('');

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

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleNameChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="phoneNumber"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder="Phone Number"
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
      />
      <input
        type="number"
        name="idForTenantToAssociate"
        value={idForTenantToAssociate}
        onChange={handleIdForTenantToAssociateChange}
        placeholder="ID for Tenant to Associate"
      />
      <button type="submit">Update Landlord</button>
    </form>
  );
};

export default UpdateLandlordForm

  // I STOPPED HERE //