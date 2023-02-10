import React, {useEffect} from 'react'
import styled from 'styled-components'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import { useSelector, useDispatch } from 'react-redux';
import { fetchPaymentHistory } from './paymentsSlice';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  `;

  const Section = styled.section`
    background: linear-gradient(
      90deg,
      rgba(246, 246, 246, 1) 0%,
      rgba(214, 228, 240, 1) 44%,
      rgba(30, 86, 160, 1) 79%,
      rgba(22, 49, 114, 1) 99%
    );
    background-color: #fff;
    flex: 7;
    width: 50%;
    padding: 20px;
    box-shadow: 4px 4px 20px rgba(1, 2, 3, 0.2);
  
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow: auto;
  `;

const Items = styled.div`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  font-size: 7rem;
`;

const Font = styled.p`
  font-size: 24px;
  margin: 10px;
  font-weight: bold;
  color: black;
`;

const Container = styled.div`
  width: 20rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  background-color: #eee;
  box-shadow: 4px 4px 20px rgba(1, 2, 3, 0.2);
  &.medium-severity {
    background-color: #f9a51a;
  }
  &.high-severity {
    background-color: #f92a2a;
  }
`;

const Deletebtn = styled.span`
  &:hover {
    cursor: pointer;
    color: white;
  }
`;


const Payments = () => {
  const dispatch = useDispatch();
  const paymentHistory = useSelector(state => state.paymentHistory);
  const error = useSelector(state => state.error);
  const loading = useSelector(state => state.loading);
    console.log(`payments`,paymentHistory.paymentHistory)
  useEffect(() => {
    dispatch(fetchPaymentHistory());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occurred: {error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Paid Amount</th>
              <th>Payment Date</th>
              <th>Tenant ID</th>
              <th>Payment ID</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory.paymentHistory.map(payment => (
              <tr key={payment.id}>
                <td>{payment.paidAmount}</td>
                <td>{new Date(payment.paymentDate).toLocaleDateString()}</td>
                <td>{payment.tenantId}</td>
                <td>{payment.paymentId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Payments;