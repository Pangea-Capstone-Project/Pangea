import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateLandlord } from './afterSignUpLandlordSlice';
import { selectMe } from "../auth/authSlice";

const UpdateLandlordForm = () => {
    const me = useSelector(selectMe)
    console.log(`me`,me)
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({
      name: '',
      phoneNumber: '',
      email: '',
      idForTenantToAssociate: ''
    });
  
    const handleInputChange = (event) => {
      setInputs({
        ...inputs,
        [event.target.name]: event.target.value
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(updateLandlord(me.id, inputs));
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="phoneNumber"
          value={inputs.phoneNumber}
          onChange={handleInputChange}
          placeholder="Phone Number"
        />
        <input
          type="email"
          name="email"
          value={inputs.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <input
          type="number"
          name="idForTenantToAssociate"
          value={inputs.idForTenantToAssociate}
          onChange={handleInputChange}
          placeholder="ID for Tenant to Associate"
        />
        <button type="submit">Update Landlord</button>
      </form>
    );
  };
  
  export default UpdateLandlordForm

  // I STOPPED HERE //