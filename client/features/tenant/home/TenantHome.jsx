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
`

const RentBox = styled.div`
border: 2px solid #1E56A0;
color: #1E56A0;
`

const TenantHome = () => {
    return (
        <Background>
            <Title>Tenant Home</Title>
            <RentBox>
                <p>Your Monthly Rent s: </p>
            </RentBox>

        </Background>
    )
}

export default TenantHome