import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components'
import Footer from '../footer/Footer';
import pangea5 from '../../../public/pangea5.png';

const Background = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background: rgb(246,246,246);
background: linear-gradient(90deg, rgba(246,246,246,1) 0%, rgba(214,228,240,1) 40%, rgba(30,86,160,1) 77%, rgba(22,49,114,1) 100%);
`
const WelcomeBanner = styled.div`
Width: 93vw;
height: 10vh;
display: flex;
justify-content: center;
align-items: center;
border-radius: 20px;
border: 2px solid darkgreen;
padding: 1rem;
z-index: 3;
background-color: rgba(30, 86, 160, 0.4);
box-shadow: 4px 4px 10px 1px black;
color: #D6E4F0;
text-shadow: 2px 2px 4px black;
font-size: 3rem;
margin: 1rem;
gap: 4rem;
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
margin-left: 2rem;
`

const DescriptionTitle = styled.h2`
font-size: 2rem;
width: 20vw;
margin: 0.5rem 0 0 0;
display: flex;
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
left: -30%;
z-index: 3;
line-height: 3rem;
text-shadow: 2px 2px 2px black;
width: 30vw;
height: 50vh;
justify-content: center;
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
align-items: center;
margin: 20px;
border-radius: 20px;
height: auto;
position: relative;
`
const rotate = keyframes`

from { background-position: 0vw 0vw; }
to { background-position: 10057vw 0vw; }
`
const Img = styled.div`
z-index: 2;
border-radius: 50%;
box-shadow: inset -30px -30px 150px 5px black;
background-color: #1E56A0;
width: 40vw;
height: 40vw;
background-image: url(${pangea5});
animation: ${rotate} 2000s linear infinite;
animation-fill-mode: both;
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
            <WelcomeBanner>
            <AllButtons onClick={handleLogin}>Login</AllButtons>
                Welcome To Pangea 
                    <AllButtons onClick={handleSignup}>Create Account</AllButtons>
                </WelcomeBanner>
            <MainBlock>
                <Img></Img>
                <DescriptionBlock>
                    <DescriptionTitle>Whats up with pangea?</DescriptionTitle>
                    <Description> Pangea will strongly reduce your apartment complex's sinusoidal depleneration.
                        It will actively remove non paying squatters, thus reducing your complex's complexities,
                        and hopefully assisting you with your mental complexes.
                    </Description>
                </DescriptionBlock>
               
            </MainBlock>
            <Footer />
        </Background>
    )
}

export default Home