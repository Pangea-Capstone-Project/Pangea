import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUnit } from './AddAUnitSlice';

const UnitForm = () => {
  const [unit, setUnit] = useState({
    unitNumber: '',
    rentAmount: '',
    bedrooms: '',
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setUnit({ ...unit, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createUnit({ ...unit, propertyId: 1 }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="unitNumber"
        value={unit.unitNumber}
        onChange={handleChange}
        placeholder="Unit#"
      />
      <input
        type="number"
        name="rentAmount"
        value={unit.rentAmount}
        onChange={handleChange}
        placeholder="Rent Amount"
      />
      <input
        type="number"
        name="bedrooms"
        value={unit.bedrooms}
        onChange={handleChange}
        placeholder="Phone Number"
      />
      <button type="submit">Create Unit</button>
    </form>
  );
};

export default UnitForm;
