import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchlandlordAsync, selectLandlord } from "./landlordProfileSlice";
import { selectMe } from "../auth/authSlice";
import styled from "styled-components";
import { FaUser, FaHome, FaUserCircle, FaPhone, FaEnvelope } from "react-icons/fa";
import LandlordNavbar from "../navbar/LandlordNavbar";

const StyledLandlordProfile = styled.div`
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProfileSection = styled.section`
  background-color: #fff;
  width: 80%;
  padding: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  margin-top: 30px;
`;

const ProfileHeader = styled.h2`
  color: #1d3557;
`;

const ProfileItem = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ProfileIcon = styled.span`
  margin-right: 10px;
`;

const LandlordProfile = () => {
  const dispatch = useDispatch();
  const me = useSelector(selectMe);
  const userLandlord = useSelector(selectLandlord);
  console.log(`userLandlord`,userLandlord)

  useEffect(() => {
    dispatch(fetchlandlordAsync(me.id));
  }, [dispatch]);

  return (
    <div>
      <LandlordNavbar />
      <StyledLandlordProfile>
        <ProfileSection>
          <ProfileHeader>Landlord Profile</ProfileHeader>
          <ProfileItem>
            <ProfileIcon>
              <FaUser />
            </ProfileIcon>
            Name: {userLandlord.name}
          </ProfileItem>
          <ProfileItem>
            <ProfileIcon>
              <FaHome />
            </ProfileIcon>
            Address: {userLandlord.address}
          </ProfileItem>
          <ProfileItem>
            <ProfileIcon>
              <FaUserCircle />
            </ProfileIcon>
            Username: {userLandlord.username}
          </ProfileItem>
          <ProfileItem>
            <ProfileIcon>
              <FaPhone />
            </ProfileIcon>
            Phone Number: {userLandlord.phoneNumber}
          </ProfileItem>
          <ProfileItem>
            <ProfileIcon>
              <FaEnvelope />
            </ProfileIcon>
            Email: {userLandlord.email}
          </ProfileItem>
        </ProfileSection>
      </StyledLandlordProfile>
    </div>
  );
};

export default LandlordProfile;

