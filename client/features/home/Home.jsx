import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components'


const Background = styled.div`
display: flex;
align-items: center;
flex-direction: column;
background: rgb(246,246,246);
background: linear-gradient(90deg, rgba(246,246,246,1) 0%, rgba(214,228,240,1) 40%, rgba(30,86,160,1) 77%, rgba(22,49,114,1) 100%);
`

const AllButtons = styled.button`
background-color: rgba(30, 86, 160, 0.4);
box-shadow: 4px 4px 10px 1px black;
color: #D6E4F0;
text-shadow: 2px 2px 4px black;
border-radius: 20px;
width: 20vw;
height: 5vh;
font-size: 1.5rem;
margin: 1rem;
border: 2px solid darkgreen;
`
const DescriptionBlock = styled.div`
color: white;
display: flex;
flex-direction: column;
position: absolute
`

const DescriptionTitle = styled.h2`
color: red;
font-size: 2rem;
margin: 1rem;
margin-top: 14vh;
width: 20vw;
display: flex;
margin-left: 10vw;
z-index: 3;
background-color: rgba(30, 86, 160, 0.4);
box-shadow: 4px 4px 10px 1px black;
color: #D6E4F0;
text-shadow: 2px 2px 4px black;
justify-content: center;
border-radius: 20px;
border: 2px solid darkgreen;
padding: 1rem;
`
const Description = styled.p`
color: white;
font-size: 1.5rem;
display: flex;
// margin-top: 10vh;
left: -30%;
z-index: 3;
line-height: 3rem;
text-shadow: 2px 2px 2px black;
width: 30vw;
height: auto;
justify-content: center;
align-items: center;
background-color: rgba(30, 86, 160, 0.4);
box-shadow: 4px 4px 10px 1px black;
color: #D6E4F0;
text-shadow: 2px 2px 4px black;
border-radius: 20px;
border: 2px solid darkgreen;
padding: 1rem;
`
const ButtonBox = styled.div`
width: 40%;
position: absolute;
z-index: 3;
bottom: 15%;
right: 22.5%;
`
const MainBlock = styled.div`
width: 90%;
display: flex;
flex-direction: row;
justify-content: center;
margin: 20px;
border-radius: 20px;
height: auto;
position: relative;
`
const rotate = keyframes`

from {
    transform: rotateY(0deg);
}
to {
    transform: rotateY(360deg);
} 
`
const Img = styled.img`
z-index: 2;
border-radius: 50%;
box-shadow: inset -20px -20px 150px 5px black;
background-color: #1E56A0;
width: 40vw;
height: 40vw;

animation: ${rotate} 5s linear infinite;
transform-style: preserve-3d;
`;





const Home = () => {


    const navigate = useNavigate();
    const handleLogin = () =>{
        navigate('/login')
    }
    const handleSignup = () =>{
        navigate('/signup')
    }
    return (
        <Background>
            <MainBlock>
                <DescriptionBlock>
                    <DescriptionTitle>Whats up with pangea?</DescriptionTitle>
                    <Description> Pangea will strongly reduce your apartment complex's sinusoidal depleneration.
                        It will actively remove non paying squatters, thus reducing your complex's complexities,
                        and hopefully assisting you with your mental complexes.
                    </Description>
                </DescriptionBlock>
                <Img src="pangea5.png" alt="photo of super continent Pangea" ></Img>
                <ButtonBox>
                    <AllButtons onClick={handleLogin}>Login</AllButtons>
                    <AllButtons onClick={handleSignup}>Create Account</AllButtons>
                </ButtonBox>
            </MainBlock>
        </Background>
    )
}

export default Home