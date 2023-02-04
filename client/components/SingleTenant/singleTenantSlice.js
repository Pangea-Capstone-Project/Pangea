import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getTenant = createAsyncThunk('tenant/getTenant', async (id) => {
    const tenant = await axios.get(`/api/tenant/${id}`)
    return tenant.data
})

const singleTenantSlice = createSlice({
    name: "tenant",
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTenant.fulfilled, (state, action) => {
            return {...state, ...action.payload}
        })
    }
})

// export default getTenant
export default singleTenantSlice.reducer