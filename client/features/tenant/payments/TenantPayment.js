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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
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

const PaymentForm = () => {
  const dispatch = useDispatch();
  const [paymentDate, setPaymentDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [creditCard, setCreditCard] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const thisUser = useSelector(selectMe);
  const thisTenant = useSelector(selectTenant);
  useEffect(() => {
    dispatch(fetchTenantAsync(thisUser.id));
  }, [dispatch]);
  console.log(`thisUser`, thisUser);
  console.log(`thisTenant`, thisTenant);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      // Handle the credit card payment process here
      // ...
      // Once the payment process is successful, submit the payment to the backend
      await dispatch(
        submitPayment(thisTenant.id, paymentDate, thisTenant.rentAmount, thisTenant.name)
      );
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

return (
  <FormContainer>
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="paymentDate">Payment Date:</Label>
        <Input type="date" id="paymentDate" value={paymentDate} readOnly />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="firstName">First Name:</Label>
        <Input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="lastName">Last Name:</Label> 
        <Input
            type="text"
            id="lastName"
            placeholder="Enter your last name"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="address">Address:</Label>
          <Input
            type="text"
            id="address"
            placeholder="Enter your address"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="zipCode">Zip Code:</Label>
          <Input
            type="text"
            id="zipCode"
            placeholder="Enter your zip code"
          />
              <FormGroup>
        <Label htmlFor="creditCardNumber">Credit Card Number:</Label>
        <Input
          type="text"
          id="creditCardNumber"
          placeholder="Enter your credit card number"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="expirationDate">Expiration Date:</Label>
        <Input
          type="month"
          id="expirationDate"
          placeholder="Enter your credit card expiration date"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="cvv">CVV:</Label>
        <Input
          type="text"
          id="cvv"
          placeholder="Enter your credit card CVV"
          onChange={(e) => setCvv(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="cardholderName">Cardholder Name:</Label>
        <Input
          type="text"
          id="cardholderName"
          placeholder="Enter your name as it appears on the card"
        />
      </FormGroup>
        </FormGroup>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <SubmitButton type="submit">Submit Payment</SubmitButton>
        )}
      </Form>
    </FormContainer>
  );
};

export default PaymentForm;
