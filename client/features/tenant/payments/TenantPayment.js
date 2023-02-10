import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTenant, fetchTenantAsync } from '../../allTenants/singleTenantSlice';
import { selectMe } from '../../auth/authSlice';
import { submitPayment } from './tenantPaymentSlice';

const PaymentForm = () => {
  const dispatch = useDispatch();
  const [paymentDate, setPaymentDate] = useState(new Date().toISOString().slice(0, 10));
  const [creditCard, setCreditCard] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


    const thisUser = useSelector(selectMe);
    const thisTenant = useSelector(selectTenant)
    useEffect(() => {
        dispatch(fetchTenantAsync(thisUser.id));
      }, [dispatch]);
      console.log(`thisUser`, thisUser);
      console.log(`thisTenant`, thisTenant);

  const handleSubmit = async event => {
    event.preventDefault();
    setLoading(true);
    try {
      // Handle the credit card payment process here
      // ...
      // Once the payment process is successful, submit the payment to the backend
      await dispatch(submitPayment(thisTenant.id, paymentDate, thisTenant.rentAmount));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');

  const handleSubmitFirstForm = (e) => {
    e.preventDefault();
    console.log(`Card Number: ${cardNumber}`);
    console.log(`Expiry Date: ${expiryDate}`);
    console.log(`CVC: ${cvc}`);
  };
  return (
    <div>
 <form onSubmit={handleSubmitFirstForm}>
      <div>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="expiryDate">Expiry Date:</label>
        <input
          type="text"
          id="expiryDate"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="cvc">CVC:</label>
        <input
          type="text"
          id="cvc"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
        />
      </div>
      <button type="submit">Submit Payment</button>
    </form>
    <form onSubmit={handleSubmit}>
      <div>
      <label htmlFor="paymentDate">Payment Date:</label>
      <input type="date" id="paymentDate" value={paymentDate} readOnly />
    </div>
    
      <div>
        <label htmlFor="creditCard">Credit Card:</label>
        <input type="text" id="creditCard" value={creditCard} onChange={e => setCreditCard(e.target.value)} />
      </div>
      {loading ? (
          <div>Loading...</div>
          ) : error ? (
              <div>Error: {error}</div>
              ) : (
                  <button type="submit">Submit Payment</button>
                  )}
    </form>
                  </div>
  );
};

export default PaymentForm;