import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTenant,
  fetchTenantAsync,
} from "../../allTenants/singleTenantSlice";
import { selectMe } from "../../auth/authSlice";
import { submitPayment } from "./tenantPaymentSlice";
import styled from "styled-components";
import Sidebar from "../tenantSidebar/Sidebar.jsx";

const Background = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: white;
`;
const FormContainer = styled.div`
  display: flex;
  flex: 7;
  flex-direction: row;
  justify-content: space-between;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem;
  background-color: #eee;
  padding-bottom: 5rem;
  height:30rem;
`;

const FormGroup= styled.div`
  display: flex;
  flex:1;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 35rem;
`;

const Label = styled.label`
  display: flex;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 1rem;
  font-size: 1.2rem;
  background-color: lightblue;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: blue;
    color: white;
  }
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;



const NameInput = styled.input`
  width: 16.5rem;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px;
`;

const PaymentForm = () => {
  const dispatch = useDispatch();
  const [paymentDate, setPaymentDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

  const thisUser = useSelector(selectMe);
  const thisTenant = useSelector(selectTenant);
  useEffect(() => {
    dispatch(fetchTenantAsync(thisUser.id));
  }, [dispatch]);
  console.log(`thisUser`, thisUser);
  console.log(`thisTenant`, thisTenant);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await dispatch(
        submitPayment(
          thisTenant.id,
          paymentDate,
          thisTenant.rentAmount,
          thisTenant.name
        )
      );
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Background>
      <Sidebar />
      <FormContainer>
       
          <Form>
            <h1> Personal Information </h1>
            <FormGroup>
              <Label>Payment Date: {paymentDate}</Label>
            
              <Label>Due Amount: ${thisTenant.rentAmount}</Label>
            </FormGroup>
            <NameContainer>
              <Input type="text" id="firstName" placeholder="First Name" />
              <Input type="text" id="lastName" placeholder="Last Name" />
            </NameContainer>
            <FormGroup>
              <Input type="text" id="street" placeholder="Street Address" />
              <Input type="text" id="city" placeholder="City" />
              <Input type="text" id="state" placeholder="State" />
              <Input type="text" id="zip" placeholder="Zipcode" />
            </FormGroup>
          
        </Form>
  
        <Form onSubmit={handleSubmit}>
          <h1>Payment Information</h1>
          <FormGroup>
            <Label htmlFor="cardholderName">Cardholder Name:</Label>
            <Input type="text" id="cardholderName" placeholder="Name on the card"/>
          
            <Label htmlFor="creditCardNumber">Credit Card Number:</Label>
            <Input
              type="text"
              id="creditCardNumber"
              placeholder="Credit Card Number"
            />
          
            <Label htmlFor="expirationDate">Expiration Date:</Label>
            <Input type="month" id="expirationDate" />
          
            <Label htmlFor="cvv">CVV:</Label>
            <Input type="text" id="cvv" placeholder="CVV" />
          </FormGroup>
          <SubmitButton type="submit">Submit Payment</SubmitButton>
        </Form>
      </FormContainer>
    </Background>
  );
};

export default PaymentForm;
