import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUnitsAsync = createAsyncThunk('units', async() =>{
  try{
    const { data } = await axios.get(`http://localhost:8080/api/unit`);
    return data
  } catch (err){
    console.log(`error in unitsThunk`,err)
  }
});

const unitsSlice = createSlice({
    name: 'units',
    initialState: [],
    reducers: {},
    extraReducers:(builder) => {
      builder.addCase(fetchUnitsAsync.fulfilled, (state, action) => {
        return action.payload;
      });
    },
  });

  
export const selectUnits = (state) => {
    return state.units;
  };

export default unitsSlice.reducer