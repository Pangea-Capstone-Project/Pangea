import { createSlice } from "@reduxjs/toolkit";

const cartRentDetailsSlice = createSlice({
	name: "cartRentDetails",
	initialState: [],
	reducers: {
		storeRentDetails: (state, action) => {
			return action.payload;
		},
	},
});

export const selectCartRentDetails = (state) => {
	return state.orderDetails;
};

export const { storeRentDetails } = cartRentDetailsSlice.actions;

export default cartRentDetailsSlice.reducer;
