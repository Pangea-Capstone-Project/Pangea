import React, {useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { updateTenant} from './afterTenantSignUpSlice';
import { selectMe } from '../auth/authSlice';

const AfterSignUpTenant = () => {
  const me = useSelector(selectMe)
  console.log(`me`,me)
  
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateTenant(me.id, {
      name,
      dateOfBirth,
      phoneNumber,
      email,
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
        type="date"
        name="dateOfBirth"
        value={dateOfBirth}
        onChange={handleDateOfBirthChange}
        placeholder="Date of Birth"
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
      <button type="submit">Update Tenant</button>
    </form>
  )
}

export default AfterSignUpTenant