import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  payment: {},
  paymentLoading: false,
  paymentError: null,
};

const paymentsSlice = createSlice({
  name: 'payments',
  initialState,
  reducers: {
    submitPaymentStart: state => {
      state.paymentLoading = true;
      state.paymentError = null;
    },
    submitPaymentSuccess: (state, action) => {
      state.payment = action.payload;
      state.paymentLoading = false;
      state.paymentError = null;
    },
    submitPaymentFailure: (state, action) => {
      state.paymentLoading = false;
      state.paymentError = action.payload;
    },
  },
});

export const { submitPaymentStart, submitPaymentSuccess, submitPaymentFailure } = paymentsSlice.actions;
export default paymentsSlice.reducer;

export const submitPayment = (tenantId, paymentDate, paidAmount) => async dispatch => {
  dispatch(submitPaymentStart());
  try {
    const response = await axios.post('/api/payment', { tenantId, paymentDate, paidAmount });
    dispatch(submitPaymentSuccess(response.data));
  } catch (error) {
    dispatch(submitPaymentFailure(error.message));
  }
};