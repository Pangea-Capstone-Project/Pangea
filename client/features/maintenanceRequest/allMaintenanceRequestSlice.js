import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMaintenanceRequestAsync = createAsyncThunk('allMaintenanceRequest', async() =>{ 
    try{
        const { data } = await axios.get(`http://localhost:8080/api/maintenanceRequest`);
        return data;
    } catch (err){
        console.log(`error in workOrderThunk`,err)
    }
})

const maintenaceRequestsSlice = createSlice({
    name: 'maintenanceRequests',
    initialState: [],
    reducers: {},
    extraReducers:(builder) =>{
        builder.addCase(fetchMaintenanceRequestAsync.fulfilled, (state,action) =>{
            return action.payload;
        });
    },
});

export const selectMaintenanceRequests = (state) => {
    return state.maintenanceRequests;
}

export default maintenaceRequestsSlice.reducer