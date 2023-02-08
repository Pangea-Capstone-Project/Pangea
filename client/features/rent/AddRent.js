import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRentAsync } from "./rentSlice";
import { selectTenants, fetchTenantsAsync } from "../allTenants/allTenantsSlice";
import styled from "styled-components";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
const Container = styled.div`
display:flex;
flex-direction: row
background: rgb(246,246,246);
background: linear-gradient(90deg, rgba(246,246,246,1) 0%, rgba(214,228,240,1) 44%, rgba(30,86,160,1) 79%, rgba(22,49,114,1) 99%);
;`


const Form = styled.form`
display: flex;
flex:7;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #F6F6F6;
padding: 20px;
width: 80rem;
height:20rem;
margin: 20px auto;
background-color: #f2f2f2;
box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;


const Input = styled.input`
margin: 10px 0;
padding: 10px;
width: 20rem;
font-size: 1.2em;
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
const Select = styled.select`
  width: 15rem;
  height: 3rem;
  border: 1px solid #d6e4f0;
  padding: 10px;
  font-size: 16px;
  margin: 10px 0;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;
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
    <Container>
      <Sidebar />
      

        <Form onSubmit={onSubmit}>
        <h1>Create rent</h1>
        <p>Please fill out this form to create a new rent amount.</p>
          <Select name="tenantId" value={tenantId} onChange={handleChange}>
            <option>Select Tenant</option>
            {tenants.map((tenant) =>(
              <option key={tenant.id} value={tenant.id}>
                {tenant.username}
              </option>
            ))}

          </Select>
          <label>Rent Price</label>
          <Input
            type="number"
            name="price"
            placeholder="$"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
          <Button>Submit</Button>

        </Form>
      
    </Container>
  )
};

export default AddRent
