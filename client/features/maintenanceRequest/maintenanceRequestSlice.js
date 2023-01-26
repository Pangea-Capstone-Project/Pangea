import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMaintenanceRequestAsync = createAsyncThunk('allMaintenanceRequest', async() =>{
    const { data } = await axios.get(`http://localhost:8080/api/maintenanceRequest`);
    return data;
})

const maintenaceRequestSlice = createSlice({
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

export default maintenaceRequestSlice.reducer