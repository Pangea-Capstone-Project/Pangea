import React from "react";
import AppRoutes from "./AppRoutes";
import Footer from "../features/footer/Footer";
import { fetchCartAsync } from "../features/cart/cartSlice";
import { selectAuth } from "../features/auth/authSlice.js";

const App = () => {
  const { id } = useSelector(selectAuth);
	const dispatch = useDispatch();
	useEffect(() => {
		if (id) dispatch(fetchCartAsync(id));
	}, [dispatch, id]);
  return (
    <div>
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
