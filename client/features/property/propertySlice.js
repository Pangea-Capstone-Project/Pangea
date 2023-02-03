import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPropertiesAsync = createAsyncThunk('properties', async() =>{
  try{
    const { data } = await axios.get(`http://localhost:8080/api/property`);
    console.log(`i am data from thunk`, data)
    return data
  } catch (err){
    console.log(`error in Properties Thunk`,err)
  }
});

const propertiesSlice = createSlice({
    name: 'properties',
    initialState: [],
    reducers: {},
    extraReducers:(builder) => {
      builder.addCase(fetchPropertiesAsync.fulfilled, (state, action) => {
        console.log(`action.payload`, action.payload)
        return action.payload;
      });
    },
  });

  
export const selectProperties = (state) => {
    return state.property;
  };

export default propertiesSlice.reducer