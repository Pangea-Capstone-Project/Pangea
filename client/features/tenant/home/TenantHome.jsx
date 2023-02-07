import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';
import { logout, me } from '../../../app/store';
import { selectMe } from "../../auth/authSlice"
import { fetchTenantAsync, selectTenant } from '../../allTenants/singleTenantSlice';

const Background = styled.div`
display: flex;
align-items: center;
flex-direction: column;
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

const TenantHome = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [rentDue, setRentDue] = useState(0)
    const [rent, setRent] = useState(100)
    const thisUser = useSelector(selectMe)
    const thisTenant = useSelector(selectTenant)

    console.log(thisTenant)
    useEffect(() => {
        dispatch(fetchTenantAsync(thisUser.id))
    }, [])

    function increaseRentDueClicked() {
        setRentDue(rentDue + 1000)
    }
    function increaseRentClicked() {
        setRent(rent + 1000)
    }

    const logoutAndRedirectHome = () => {
        dispatch(logout());
        navigate('/login');
    };
    //rentDue turns green if the tenant is caught up on rent, aka. $0.

    return (
        <Background>
            <Title>Tenant Home</Title>

            <Title>Hello, {thisTenant.name}</Title>
            <Title>Suite #{thisTenant.unitIdToAssociateTenant}</Title>
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
            <Link to={"/makeapayment"}>
                <AllButtons>
                    Make A Payment
                </AllButtons>
            </Link>
            <Link to={"/pastpayments"}>
                <AllButtons>
                    Past Payments
                </AllButtons>
            </Link>
            <Link to={"/maintenancereq"}>
                <AllButtons>
                    Submit Maintenance Request
                </AllButtons>
            </Link>
            <AllButtons onClick={logoutAndRedirectHome}>
                Log Out
            </AllButtons>

            <h2 onClick={increaseRentClicked}>Increase Rent Test</h2>
            <h2 onClick={increaseRentDueClicked}>Increase Rent Due Test</h2>
        </Background>
    )
}

export default TenantHome