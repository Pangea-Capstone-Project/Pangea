import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTenantsAsync = createAsyncThunk('tenants', async() =>{
    try{
        const { data } = await axios.get(`http://localhost:8080/api/tenant`);
        return data
    } catch (err){
        console.log(`error in tenantsThunk`,err)
    }
})


const tenantsSlice = createSlice({
    name: 'tenants',
    initialState: [],
    reducers: {},
    extraReducers:(buildeR) =>{
        buildeR.addCase(fetchTenantsAsync.fulfilled, (state,action) =>{
            return action.payload;
        });
    },
});

export const selectTenants = (state) => {
    return state.tenants;
}

export default tenantsSlice.reducer;