import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  payments: [],
  paymentLoading: false,
  paymentError: null,
};

const paymentsSlice = createSlice({
  name: 'payments',
  initialState,
  reducers: {
    getPaymentsStart: state => {
      state.paymentLoading = true;
      state.paymentError = null;
    },
    getPaymentsSuccess: (state, action) => {
      state.payments = action.payload;
      state.paymentLoading = false;
      state.paymentError = null;
    },
    getPaymentsFailure: (state, action) => {
      state.paymentLoading = false;
      state.paymentError = action.payload;
    },
  },
});

export const { getPaymentsStart, getPaymentsSuccess, getPaymentsFailure } = paymentsSlice.actions;
export default paymentsSlice.reducer;

export const fetchPayments = tenantId => async dispatch => {
  dispatch(getPaymentsStart());
  try {
    const response = await axios.get(`/api/payment/${tenantId}`);
    dispatch(getPaymentsSuccess(response.data));
  } catch (error) {
    dispatch(getPaymentsFailure(error.message));
  }
};