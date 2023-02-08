import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components'
<<<<<<< Updated upstream
import Footer from '../footer/Footer';
import pangea5 from '../../../public/pangea5.png';
=======
import Carousel from "react-elastic-carousel";

>>>>>>> Stashed changes

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
width: fit-content;
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
font-style: italic;
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
<<<<<<< Updated upstream
background-image: url(${pangea5});
=======
background-image: url(pangea5.png);
background-repeat: repeat-x;
>>>>>>> Stashed changes
animation: ${rotate} 2000s linear infinite;
animation-fill-mode: both;
transform-style: preserve-3d;
background-size: 60vw;
`;

const Properties = styled.div`
width: 90vw;
display: flex;
align-items: center;
justify-content: center;
gap: 2rem;
`
const PropertyPicture = styled.img`
height: auto;
width: 100%;
border-radius: 20px;
`
const Item = styled.div`
display: flex;
justify-content: center;
align-items: center;
  height: 50vw;
  width: 100%;
  background-color: none;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
`

const breakPoints = [
    { width: 1, itemsToShow: 1 },

];



const Home = () => {


    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login')
    }
    const handleSignup = () => {
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
                    <DescriptionTitle>三 Whats up with pangea? 三</DescriptionTitle>
                    <Description> Pangea will strongly reduce your apartment complex's sinusoidal depleneration.
                        It will actively remove non paying squatters, thus reducing your complex's complexities,
                        and hopefully assisting you with your mental complexes.
                    </Description>
                </DescriptionBlock>
            </MainBlock>
<<<<<<< Updated upstream
            <Footer />
=======

            <Properties>
                <Carousel breakPoints={breakPoints} enableAutoPlay disableArrowsOnEnd={false}>
                    <Item><PropertyPicture src="453.jpg"></PropertyPicture></Item>
                    <Item><PropertyPicture src="BTP.webp"></PropertyPicture></Item>
                    <Item><PropertyPicture src="TrailerPark.jpg"></PropertyPicture></Item>
                    <Item><PropertyPicture src="vintageTP.jpeg"></PropertyPicture></Item>
                </Carousel>
                <DescriptionBlock>
                    <DescriptionTitle>三 Powerful Tools 三 </DescriptionTitle>
                    <Description> Our tools make it easy to lease your properties and connect with your tenants. 
                        Everything is at your fingertips. Pangea is user friendly and streamlined. 
                        Your tenants will have easy access to the app so they can make payments, initiate maintenance requests, and more. 
                    </Description>
                </DescriptionBlock>
            </Properties>
            <Properties>
                <DescriptionBlock>
                    <DescriptionTitle>三 Properties 三</DescriptionTitle>
                    <Description style={{
                        color: "white"
                    }}> Our Landlords have added many properties to Pangea. They now enjoy a streamlined experience. </Description>
                </DescriptionBlock>
                <Carousel breakPoints={breakPoints} enableAutoPlay>
                    <Item><PropertyPicture src="photos/property1.jpg"></PropertyPicture></Item>
                    <Item><PropertyPicture src="photos/property2.jpg"></PropertyPicture></Item>
                    <Item><PropertyPicture src="photos/property3.jpg"></PropertyPicture></Item>
                    <Item><PropertyPicture src="photos/property4.jpg"></PropertyPicture></Item>
                    <Item><PropertyPicture src="photos/property5.jpg"></PropertyPicture></Item>
                    <Item><PropertyPicture src="photos/property6.jpg"></PropertyPicture></Item>
                    <Item><PropertyPicture src="photos/property7.jpg"></PropertyPicture></Item>
                </Carousel>
            </Properties>
            <Properties>
                <Carousel breakPoints={breakPoints} enableAutoPlay>
                    <Item><PropertyPicture src="photos/landlord1.jpg"></PropertyPicture></Item>
                    <Item><PropertyPicture src="photos/landlord2.jpg"></PropertyPicture></Item>
                    <Item><PropertyPicture src="photos/landlord3.jpg"></PropertyPicture></Item>
                    <Item><PropertyPicture src="photos/landlord4.jpg"></PropertyPicture></Item>
                    <Item><PropertyPicture src="photos/landlord5.jpg"></PropertyPicture></Item>
                  
                </Carousel>
                <DescriptionBlock>
                    <DescriptionTitle>三 Empowered Landlords 三 </DescriptionTitle>
                    <Description> Our customers enjoy a streamlined experience while working with their tenants.
                    </Description>
                </DescriptionBlock>
            </Properties>
>>>>>>> Stashed changes
        </Background>
    )
}

export default Home