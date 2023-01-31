import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import styled from 'styled-components'



const Background = styled.div`
display: flex;
align-items: center;
flex-direction: column;
background-color: white;
`
const Title = styled.h1`
color: #163172;
margin-bottom: -0.4rem;
`

const RentBox = styled.div`
border: 3px solid #1E56A0;
color: #1E56A0;
border-radius: 20px;
width: 45vw;
height: 15vh;
margin: 2rem;
display: flex;
`

const MonthlyRentBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50%;
border-right: 2px solid #1E56A0;
`
const DueRentBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50%;

`
const MonthlyAmount = styled.div`
display: flex;
flex-direction: column;
font-size: 1.5rem;

`
const DueAmount = styled.div`
display: flex;
flex-direction: column;
font-size: 1.5rem;

`
const AllButtons = styled.button`
background-color: #1E56A0;
color: white;
border: none;
border-radius: 20px;
width: 30vw;
height: 5vh;
font-size: 1.5rem;
margin-bottom: 2rem;
`

//dummy daters
const tenantName = "Pepe Silvia"
const tenantUnit = "202"

const MakeAPayment = () => {

    const [rentDue, setRentDue] = useState(0)
    const [rent, setRent] = useState(0)
    const [amountToPay, setAmountToPay] = useState(0)

   
    function increaseRentDueClicked() {
        setRentDue(rentDue + 1000)
    }
    function increaseRentClicked() {
        setRent(rent + 1000)
    }
    function changeAmountToPay(e) {
        setAmountToPay(e.target.value)
    }
    function PayRent() {
        setRentDue(
            rentDue >= amountToPay ? rentDue - amountToPay : alert("You can only enter an amount less than or equal to you rent due."))
    }


    //rentDue turns green if the tenant is caught up on rent, aka. $0.
    //message counter disappears when the tenant has no unread messages.
    //message counter stops displaying numbers of messages after 99. 

    return (
        <Background>
            <Title>Tenant Home</Title>
            <Title>Hello, {tenantName}</Title>
            <Title>Suite #{tenantUnit}</Title>
            <RentBox>
                <MonthlyRentBox>
                    <h2>Monthly Rent</h2>
                    <MonthlyAmount>
                        ${rent}
                    </MonthlyAmount>

                </MonthlyRentBox>
                <DueRentBox>
                    <h2>Rent Due</h2>
                    <DueAmount style={{
                        color: (rentDue === 0) ? "green" : "red"
                    }}>
                        ${rentDue}
                    </DueAmount>

                </DueRentBox>
            </RentBox>
            <AllButtons onClick={PayRent}>
                Pay Rent Now
            </AllButtons>
            <h3>Amount To Pay: </h3>
            <input label={"Amount to pay"} type={"number"} onChange={changeAmountToPay}
             step={100} min={0} max={rentDue}>
            </input>
            <h3>Pay with selected payment method. </h3>

            <h2 onClick={increaseRentClicked}>Increase Rent Test</h2>
            <h2 onClick={increaseRentDueClicked}>Increase Rent Due Test</h2>
        </Background>
    )
}



export default MakeAPayment