import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRentAsync } from "./rentSlice";

const AddRent = () => {
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addRentAsync({ price }));
    setPrice("");
  };


  return (
    <div className="addRent">

      <section className="addRentForm">
        <h1>Create rent</h1>
        <p>Please fill out this form to create a new rent amount.</p>

        <form onSubmit={onSubmit}>
          <label>Rent Price</label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
          <button>Submit</button>

        </form>
      </section>
    </div>
  )
};

export default AddRent
