import React, { useEffect } from "react";
import AppRoutes from "./AppRoutes";
import Footer from "../features/footer/Footer";
import { fetchCartAsync } from "../features/cart/cartSlice";
import { selectMe } from "../features/auth/authSlice.js";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const { id } = useSelector(selectMe);
	const dispatch = useDispatch();
	useEffect(() => {
		if (id) dispatch(fetchCartAsync(id));
	}, [dispatch, id]);
  return (
    <div>
      <AppRoutes />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
