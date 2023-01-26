import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
width 45vw;
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

const MessageCount = styled.div`
background-color: red;
border-radius: 50%;
width: 1.5rem;
height: 1.5rem;
font-size: 70%;
display: flex;
align-items: center;
justify-content: center;
color: white;
margin-left: -14px;

`
const MessageButtonAndNumber = styled.div`
display: flex;
`

const rent = 1000
const rentDue = 2000
const tenantName = "Pepe Silvia"
const tenantUnit = "202"
const messageCount = 10

const TenantHome = () => {
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
            <AllButtons>
                Make A Payment
            </AllButtons>
            <AllButtons>
                Past Payments
            </AllButtons>
            <AllButtons>
                Submit Maintenance Request
            </AllButtons>
            <MessageButtonAndNumber>
                <AllButtons>
                    Messages
                </AllButtons>
                <MessageCount style={{
                        zIndex: (messageCount === 0) ? "-1" : "2"
                    }}>{(messageCount >= 99) ? 99 : messageCount}</MessageCount>
            </MessageButtonAndNumber>
        </Background>
    )
}

export default TenantHome