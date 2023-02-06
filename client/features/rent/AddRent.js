import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRentAsync } from "./rentSlice";
import { selectTenants, fetchTenantsAsync } from "../allTenants/allTenantsSlice";

const AddRent = () => {
  const [price, setPrice] = useState('');
  const [tenantId, setTenantId] = useState('');
  const dispatch = useDispatch();
  const tenants = useSelector(selectTenants)

  console.log(`tenants`,tenants)
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addRentAsync({ rentAmount : price, tenantId }));
    setPrice("");
  };

  const handleChange = (e) =>{
    setTenantId(e.target.value);
  }

  useEffect(() =>{
    dispatch(fetchTenantsAsync());
  },[dispatch]);

  return (
    <div className="addRent">

      <section className="addRentForm">
        <h1>Create rent</h1>
        <p>Please fill out this form to create a new rent amount.</p>

        <form onSubmit={onSubmit}>
          <select name="tenantId" value={tenantId} onChange={handleChange}>
            <option>Select Tenant</option>
            {tenants.map((tenant) =>(
              <option key={tenant.id} value={tenant.id}>
                {tenant.username}
              </option>
            ))}

          </select>
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
