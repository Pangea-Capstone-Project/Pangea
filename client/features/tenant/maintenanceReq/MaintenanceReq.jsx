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
`

const EmInfoBox = styled.div`
border: 3px solid #1E56A0;
color: #1E56A0;
font-size: 1.4rem;
font-weight: bold;
border-radius: 20px;
width 45vw;
height: auto;
margin: 2rem 2rem 0 2rem;
padding: 1rem;
display: flex;
flex-direction: column;
align-content: center;
text-align: center;

`
const EmContact = styled.h3`
color: #1E56A0;
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

//dummy daters
const messageCount = 10
const landlordPhone = "757-222-1111"

const MaintenanceReq = () => {

    const [makeEmergencyReq, setMakeEmergencyReq] = useState(false)
    const [messageCount, setMessageCount] = useState(0)

    useEffect(() => {
        console.log("Make Em Req?", makeEmergencyReq)
    })

    function detectMakeEmReqButtonClick() {
        makeEmergencyReq ? setMakeEmergencyReq(false) : setMakeEmergencyReq(true)
    }

    function changeMessageCount() {
        setMessageCount(messageCount +10)
    }

    //message counter disappears when the tenant has no unread messages.
    //message counter stops displaying numbers of messages after 99. 

    return (
        <Background>
            <Title>Maintenance Request</Title>
            <EmInfoBox>
                Examples of emergency maintenance situations include: Burst Pipes, Gas Leaks,
                Electrical Hazards, or any other immediate threat to life or the property.
                For a situation where someone is in danger, or a fire, call 911.<br></br>
                Please check messages for the status of maintenance requests.
            </EmInfoBox>
            <EmContact>
                {makeEmergencyReq ? <p>Landlord Emergency Contact: {landlordPhone}</p> : <></>}
            </EmContact>

            <AllButtons onClick={detectMakeEmReqButtonClick} style={{
                backgroundColor: makeEmergencyReq ? "red" : ""
            }}>
            {makeEmergencyReq ? "Cancel" : "Emergency Request"}
                
            </AllButtons>
            <AllButtons>
                Initiate Request
            </AllButtons>

            <MessageButtonAndNumber>
                <AllButtons>
                    Messages
                </AllButtons>
                <MessageCount style={{
                    zIndex: (messageCount === 0) ? "-1" : "2"
                }}>{(messageCount >= 99) ? 99 : messageCount}</MessageCount>
            </MessageButtonAndNumber>
            <h2 onClick={changeMessageCount}>Add Messages Test</h2>
        </Background>
    )
}

export default MaintenanceReq