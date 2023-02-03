import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchlandlordAsync, selectLandlord } from './landlordProfileSlice';
import { selectMe } from "../auth/authSlice";
import styled from "styled-components";
import LandlordNavbar from "../navbar/LandlordNavbar";


const LandlordProfile = () => {
  const dispatch = useDispatch();
  const me = useSelector(selectMe);
  const userLandlord = useSelector(selectLandlord)
  console.log(`userLandlord`, userLandlord)
  useEffect(() => {
    dispatch(fetchlandlordAsync(me.id));
  }, [dispatch]);
    
   const { name, username, phoneNumber, email, idForTenantToAssociate, address} = userLandlord
  return (
    <div>
      </div>
  )
}

export default LandlordProfile