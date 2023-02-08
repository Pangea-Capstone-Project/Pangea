import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProperty, getLandlordId } from "./AddAPropertySlice";
import { selectMe } from "../auth/authSlice";
import styled from "styled-components";
import AddAUnit from "./AddAUnit";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import { useNavigate } from "react-router-dom";


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
width: 50rem;
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

const CreateProperty = () => {
  const dispatch = useDispatch();
  const me = useSelector(selectMe);
  const [propertyName, setPropertyName] = useState("");
  const [address, setAddress] = useState("");
  const [landlordId, setLandlordId] = useState(null);
  const navigate = useNavigate();

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
      }
      navigate('/dashboard')
  };
  

  return (
    <Container>
      <Sidebar />
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
    </Container>
  );
};

export default CreateProperty;
