import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  selectTenant,
  fetchTenantAsync,
} from "../../allTenants/singleTenantSlice";
import { useParams } from "react-router-dom";
import { selectMe } from "../../auth/authSlice";
import Sidebar from "../tenantSidebar/Sidebar.jsx";
import { useNavigate } from "react-router-dom";
const Background = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: white;
  margin-left: 17vw;
width: 83vw;
`;
const Title1 = styled.h1`
  color: #163172;
  margin-bottom: 20rem;
`;
const Title = styled.h1`
  color: #163172;
  margin-bottom: 0-3rem;
`;

const RentBox = styled.div`
  border: 3px solid #1e56a0;
  color: #1e56a0;
  border-radius: 20px;
  width: 45vw;
  height: 15vh;
  margin: 2rem;
  display: flex;
`;

const Section = styled.section`
  flex: 6;
  width: 50rem;
  height: 100%;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    background-color: transparent;
  }
`;

const MonthlyRentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  border-right: 2px solid #1e56a0;
`;
const DueRentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;
const MonthlyAmount = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
`;
const DueAmount = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
`;
const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 18px;
  background-color: #1e56a0;
  color: #fff;
  border-radius: 20px;
  border: none;
  width: 30vw;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  &:hover {
    background-color: #163172;
    color: #f6f6f6;
  }
`;

const MakeAPayment = () => {
  const dispatch = useDispatch();
  const [rentDue, setRentDue] = useState(0);
  const [rent, setRent] = useState(0);
  const [amountToPay, setAmountToPay] = useState(0);

  const tenant = useSelector(selectTenant);
  const thisUser = useSelector(selectMe);

  useEffect(() => {
    dispatch(fetchTenantAsync(thisUser.id));
  }, [dispatch]);
  console.log(`tenant`, tenant);

  function increaseRentDueClicked() {
    setRentDue(rentDue + 1000);
  }
  function increaseRentClicked() {
    setRent(rent + 1000);
  }
  function changeAmountToPay(e) {
    setAmountToPay(e.target.value);
  }
//   function PayRent() {
//     setRentDue(
//       rentDue >= amountToPay
//         ? rentDue - amountToPay
//         : alert(
//             "You can only enter an amount less than or equal to you rent due."
//           )
//     );
//   }
  const navigate = useNavigate();
const handleNav = () =>{
    navigate('/payment')
}

  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 12) {
      setGreeting("Good morning");
    } else if (hour >= 12 && hour < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  }, []);

  //rentDue turns green if the tenant is caught up on rent, aka. $0.
  //message counter disappears when the tenant has no unread messages.
  //message counter stops displaying numbers of messages after 99.

  return (
    <Background>
      <Sidebar />
      <Section>
        <Title1>
          {greeting}, {tenant.name}
        </Title1>
        <Title>Suite #{tenant.unitIdToAssociateTenant}</Title>
        <RentBox>
          <MonthlyRentBox>
            <h2>Monthly Rent</h2>
            <MonthlyAmount>${tenant.rentAmount}</MonthlyAmount>
          </MonthlyRentBox>
          <DueRentBox>
            <h2>Rent Due</h2>
            <DueAmount
              style={{
                color: rentDue !== 0 ? "green" : "red",
              }}
            >
              ${tenant.rentAmount}
            </DueAmount>
          </DueRentBox>
        </RentBox>
        <Button onClick={handleNav}>Pay Rent Now</Button>
      </Section>
      {/* <h3>Amount To Pay: </h3>
            <input label={"Amount to pay"} type={"number"} onChange={changeAmountToPay}
             step={100} min={0} max={rentDue}>
            </input>
            <h3>Pay with selected payment method. </h3> */}
      {/* <h2 onClick={increaseRentClicked}>Increase Rent Test</h2>
            <h2 onClick={increaseRentDueClicked}>Increase Rent Due Test</h2> */}
    </Background>
  );
};

export default MakeAPayment;
